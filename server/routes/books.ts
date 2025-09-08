import { RequestHandler } from "express";
import { RequestHandler } from "express";
import { books, listings } from "../data";

export const getBooks: RequestHandler = (req, res) => {
  const sort = String(req.query.sort ?? "").toLowerCase();
  const q = String(req.query.q ?? "").trim().toLowerCase();
  let items = [...books];

  // Search filter
  if (q) {
    items = items.filter((b) => {
      const hay = `${b.title} ${b.author} ${b.synopsis} ${b.genres.join(" ")}`.toLowerCase();
      return q.split(/\s+/).every((term) => hay.includes(term));
    });
  }

  if (sort === "newest") {
    items.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  } else if (sort === "popular" || sort === "most_popular") {
    items.sort((a, b) => (b.communityRating ?? 0) - (a.communityRating ?? 0));
  } else if (sort === "selling" || sort === "most_selling") {
    const counts = new Map<string, number>();
    for (const l of listings) counts.set(l.book.id, (counts.get(l.book.id) ?? 0) + 1);
    items.sort((a, b) => (counts.get(b.id) ?? 0) - (counts.get(a.id) ?? 0) || (b.communityRating ?? 0) - (a.communityRating ?? 0));
  } else if (sort === "trending") {
    // trending = communityRating desc then recent year
    items.sort((a, b) => (b.communityRating ?? 0) - (a.communityRating ?? 0) || (b.year ?? 0) - (a.year ?? 0));
  } else if (sort === "editors") {
    // simple deterministic editors' pick: sort by title
    items.sort((a, b) => a.title.localeCompare(b.title));
  }

  res.json({ items });
};
