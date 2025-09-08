import React, { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import BookCard from "@/components/books/BookCard";
import BookModal from "@/components/books/BookModal";
import { Button } from "@/components/ui/button";
import type { Book, CreateListingRequest, Listing, ListingsResponse } from "@shared/api";
import { useAuth } from "@/context/AuthContext";

export default function Marketplace() {
  const [books, setBooks] = useState<Book[]>([]);
  const [listings, setListings] = useState<Listing[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const res = await (await import("@/lib/api")).fetchWithFallback("/api/books");
        const d = await res.json();
        setBooks(d.items);
      } catch (err) {
        console.error("Failed to load books", err);
      }
    })();
    refreshListings();
  }, []);

  const refreshListings = async () => {
    try {
      const res = await (await import("@/lib/api")).fetchWithFallback("/api/listings");
      const d = await res.json() as ListingsResponse;
      setListings(d.items);
    } catch (err) {
      console.error("Failed to load listings", err);
    }
  };

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [price, setPrice] = useState(10);
  const [condition, setCondition] = useState<"new" | "like_new" | "good" | "fair" | "poor">("good");
  const [detailOpen, setDetailOpen] = useState<Book | null>(null);

  const submit = async () => {
    if (!user || !selectedBook) return;
    const body: CreateListingRequest & { sellerId: string } = {
      bookId: selectedBook.id,
      condition,
      priceCents: Math.round(price * 100),
      sellerId: user.id,
    };
    await fetch("/api/listings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    setSelectedBook(null);
    refreshListings();
  };

  return (
    <Layout>
      <section className="container py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Marketplace</h1>
            <p className="text-muted-foreground">Sell your old books or discover deals from others.</p>
          </div>
          {user ? null : (
            <p className="text-sm text-muted-foreground">Sign in to create listings.</p>
          )}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {books.map((b) => (
            <BookCard key={b.id} book={b} onAddToSell={user ? setSelectedBook : undefined} onOpen={(bk) => setDetailOpen(bk)} />
          ))}
        </div>

        {detailOpen && (
          <BookModal book={detailOpen} open={!!detailOpen} onClose={() => setDetailOpen(null)} />
        )}

        {selectedBook && (
          <div className="mt-8 rounded-xl border p-6 bg-card">
            <h2 className="font-semibold mb-4">Create listing for: {selectedBook.title}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <label className="text-sm">
                <div className="text-muted-foreground mb-1">Price (USD)</div>
                <input type="number" min={1} step={0.5} value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} className="w-full rounded-md border px-3 py-2" />
              </label>
              <label className="text-sm">
                <div className="text-muted-foreground mb-1">Condition</div>
                <select value={condition} onChange={(e) => setCondition(e.target.value as any)} className="w-full rounded-md border px-3 py-2">
                  <option value="new">New</option>
                  <option value="like_new">Like new</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </label>
              <div className="flex items-end gap-2">
                <Button onClick={submit}>Publish</Button>
                <Button variant="outline" onClick={() => setSelectedBook(null)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}

        <h2 className="mt-12 text-2xl font-bold">Latest Listings</h2>
        {listings.length === 0 ? (
          <p className="text-muted-foreground mt-2">No listings yet. Be the first to sell a book!</p>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings.map((l) => (
              <div key={l.id} className="rounded-xl border p-4 flex gap-4 bg-card">
                <img src={l.book.coverUrl || "/placeholder.svg"} alt="" className="w-20 h-28 object-cover rounded-md" />
                <div className="flex-1">
                  <div className="font-semibold">{l.book.title}</div>
                  <div className="text-xs text-muted-foreground">{l.book.author} • {l.condition.replace("_", " ")}</div>
                  <div className="mt-2 font-bold">${(l.priceCents / 100).toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground mt-1">Seller: {l.sellerId}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
