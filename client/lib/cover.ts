const cache = new Map<string, string | undefined>();

function normalize(s: string | undefined) {
  return (s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export async function findBestOpenLibraryCover(title: string, author?: string): Promise<string | undefined> {
  const key = `${title}::${author}`;
  if (cache.has(key)) return cache.get(key);
  try {
    const q = `title=${encodeURIComponent(title)}${author ? `&author=${encodeURIComponent(author)}` : ""}`;
    const res = await fetch(`https://openlibrary.org/search.json?${q}&limit=20`);
    if (!res.ok) {
      cache.set(key, undefined);
      return undefined;
    }
    const data = await res.json();
    const docs = data?.docs ?? [];
    const nt = normalize(title);
    const na = normalize(author);

    // First try for strong matches: title contains all words and author contains author's name
    for (const d of docs) {
      const dt = normalize(d.title);
      const das = (d.author_name || []).map((x: string) => normalize(x));
      if (nt && dt.includes(nt)) {
        if (!na || das.some((a: string) => a.includes(na))) {
          const id = d.cover_i;
          if (id) {
            const url = `https://covers.openlibrary.org/b/id/${id}-L.jpg`;
            cache.set(key, url);
            return url;
          }
        }
      }
    }

    // Fallback: first doc with cover
    for (const d of docs) {
      const id = d.cover_i;
      if (id) {
        const url = `https://covers.openlibrary.org/b/id/${id}-L.jpg`;
        cache.set(key, url);
        return url;
      }
    }

    cache.set(key, undefined);
    return undefined;
  } catch (err) {
    cache.set(key, undefined);
    return undefined;
  }
}
