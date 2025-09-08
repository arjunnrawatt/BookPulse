import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Book } from "@shared/api";

export default function BookModal({
  book,
  open,
  onClose,
}: {
  book: Book | null;
  open: boolean;
  onClose: () => void;
}) {
  const [cover, setCover] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (!book) return;
    let cancelled = false;
    async function resolveCover() {
      // prefer stored cover but validate; otherwise find a better one
      if (book.coverUrl) {
        // test if it loads
        try {
          await new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = book.coverUrl!;
          });
          setCover(book.coverUrl);
          return;
        } catch (e) {
          // fallthrough to search
        }
      }

      try {
        const found = await (await import("@/lib/cover")).findBestOpenLibraryCover(book.title, book.author);
        if (found && !cancelled) setCover(found);
      } catch (err) {
        // ignore
      }
    }
    resolveCover();
    return () => {
      cancelled = true;
    };
  }, [book]);

  if (!open || !book) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 max-w-3xl w-full bg-card rounded-lg border overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 w-full bg-secondary p-6 flex items-center justify-center">
            <img src={cover ?? book.coverUrl ?? "/placeholder.svg"} alt={`${book.title} cover`} className="max-h-96 object-contain" />
          </div>
          <div className="md:w-2/3 w-full p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">{book.title}</h3>
                <p className="text-sm text-muted-foreground">by {book.author}</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="text-sm">★ {book.communityRating?.toFixed(1) ?? "—"}</div>
                  <div className="flex flex-wrap gap-2">
                    {book.moods.map((m) => (
                      <span key={m} className="text-xs rounded-full bg-accent/70 text-accent-foreground px-2 py-0.5">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <Button variant="outline" onClick={onClose}>Close</Button>
              </div>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">{book.synopsis}</div>
            <div className="mt-6">
              <h4 className="font-semibold">Details</h4>
              <ul className="mt-2 text-sm text-muted-foreground">
                <li>Year: {book.year ?? "—"}</li>
                <li>Genres: {book.genres.join(", ")}</li>
                <li>ID: {book.id}</li>
              </ul>
              <div className="mt-4">
                <button onClick={async ()=>{
                  try{await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'mismatch',bookId:book.id,title:book.title})});alert('Reported — thanks');}catch(e){alert('Could not report');}
                }} className="text-sm text-muted-foreground hover:text-primary">Report mismatch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
