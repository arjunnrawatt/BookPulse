import { Book, ChatBooksRequest, ChatBooksResponse, MoodKey } from "@shared/api";

export function scoreBookByMoods(book: Book, moods: MoodKey[]): { score: number; reasons: string[] } {
  const set = new Set(moods);
  let overlap = 0;
  const reasons: string[] = [];
  for (const m of book.moods) {
    if (set.has(m)) {
      overlap++;
      reasons.push(`Matches mood: ${m}`);
    }
  }
  const score = book.moods.length ? overlap / Math.max(book.moods.length, moods.length, 1) : 0;
  return { score, reasons };
}

export function chatForBook(books: Book[], req: ChatBooksRequest): ChatBooksResponse {
  const question = req.question.toLowerCase();
  // Try to match a specific book by id or title
  let target: Book | undefined = books.find((b) => b.id === req.bookId);
  if (!target) {
    target = books.find((b) => question.includes(b.title.toLowerCase()));
  }

  // If still not found, pick a relevant book by simple keyword match on genres/moods/synopsis
  if (!target) {
    const scored = books
      .map((b) => {
        const hay = `${b.title} ${b.author} ${b.synopsis} ${b.genres.join(" ")} ${b.moods.join(" ")}`.toLowerCase();
        const words = question.split(/[^a-z]+/g).filter(Boolean);
        let hits = 0;
        for (const w of words) if (hay.includes(w)) hits++;
        return { book: b, hits };
      })
      .sort((a, b) => b.hits - a.hits);
    target = scored[0]?.hits ? scored[0].book : undefined;
  }

  // Compose spoiler-free hint
  if (target) {
    const hint = pickHint(target, question);
    return {
      answer: `${hint} — from ${target.title} by ${target.author}. If you'd like a bit more detail without spoilers, ask a follow-up!`,
      related: books
        .filter((b) => b.id !== target!.id)
        .slice(0, 3)
        .map((b) => ({ id: b.id, title: b.title })),
    };
  }

  // Generic guidance
  return {
    answer:
      "I couldn't find an exact match. Try mentioning the title/author or select some moods like 'mysterious', 'romantic', or 'adventurous' and ask again.",
  };
}

function pickHint(book: Book, question: string): string {
  const q = question.toLowerCase();
  // Prefer hints that match a keyword
  for (const h of book.hints) {
    const words = h.toLowerCase().split(/[^a-z]+/g).filter(Boolean);
    if (words.some((w) => q.includes(w))) return h;
  }
  // Otherwise deterministic pick based on string hash
  const idx = Math.abs(hashCode(q + book.id)) % book.hints.length;
  return book.hints[idx] ?? book.hints[0];
}

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return h;
}
