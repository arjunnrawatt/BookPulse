import RatingStars from "@/components/RatingStars";
import { Button } from "@/components/ui/button";
import { useLocalRatings } from "@/hooks/useLocalRatings";
import type { Book } from "@shared/api";
import React, { useEffect, useState } from "react";

import { findBestOpenLibraryCover } from "@/lib/cover";

export default function BookCard({ book, onAddToSell, onOpen }: { book: Book; onAddToSell?: (book: Book) => void; onOpen?: (book: Book) => void }) {
  const { ratings, rate } = useLocalRatings();
  const myRating = ratings[book.id] ?? 0;
  const [imgSrc, setImgSrc] = useState<string>(book.coverUrl ?? "/placeholder.svg");

  useEffect(() => {
    let mounted = true;
    setImgSrc(book.coverUrl ?? "/placeholder.svg");
    // If coverUrl exists, test it loads; if it fails, try OpenLibrary search
    if (book.coverUrl) {
      const img = new Image();
      img.onload = () => {
        /* ok */
      };
      img.onerror = async () => {
        if (!mounted) return;
        const found = await findBestOpenLibraryCover(book.title, book.author);
        if (found) setImgSrc(found);
      };
      img.src = book.coverUrl;
    } else {
      // no coverUrl, try to find one
      (async () => {
        const found = await findBestOpenLibraryCover(book.title, book.author);
        if (mounted && found) setImgSrc(found);
      })();
    }
    return () => {
      mounted = false;
    };
  }, [book.coverUrl, book.title, book.author]);

  return (
    <div className="group rounded-xl border bg-card/60 backdrop-blur hover:shadow-md transition overflow-hidden cursor-pointer" onClick={() => onOpen?.(book)}>
      <div className="aspect-[3/4] w-full overflow-hidden bg-secondary">
        <img src={imgSrc} alt={`${book.title} cover`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold leading-tight line-clamp-2">{book.title}</h3>
          <p className="text-xs text-muted-foreground">{book.author}</p>
        </div>
        <div className="flex items-center justify-between">
          <RatingStars value={myRating} onChange={(v) => { rate(book.id, v); }} />
          <span className="text-xs text-muted-foreground">★ {book.communityRating?.toFixed(1) ?? "—"}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {book.moods.slice(0, 3).map((m) => (
            <span key={m} className="text-[10px] rounded-full bg-accent/70 text-accent-foreground px-2 py-0.5">{m}</span>
          ))}
        </div>
        {onAddToSell && (
          <Button variant="outline" className="w-full" onClick={(e) => { e.stopPropagation(); onAddToSell(book); }}>Sell this book</Button>
        )}
      </div>
    </div>
  );
}
