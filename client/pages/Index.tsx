import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import MoodSelector from "@/components/books/MoodSelector";
import BookCard from "@/components/books/BookCard";
import BookModal from "@/components/books/BookModal";
import ChatWidget from "@/components/chat/ChatWidget";
import { Button } from "@/components/ui/button";
import type { Book } from "@shared/api";

export default function Index() {
  const [featured, setFeatured] = useState<Book[]>([]);
  const [moods, setMoods] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const fetchBooks = async (sort?: string, qParam?: string) => {
    try {
      const params = new URLSearchParams();
      if (sort) params.set("sort", sort);
      if (qParam) params.set("q", qParam);
      const query = params.toString() ? `?${params.toString()}` : "";
      const res = await (await import("@/lib/api")).fetchWithFallback(`/api/books${query}`);
      const data = await res.json();
      setFeatured(data.items.slice(0, 8));
    } catch (err) {
      console.error("Failed to load books", err);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sort = params.get("sort") ?? undefined;
    const q = params.get("q") ?? undefined;
    fetchBooks(sort, q);
  }, [location.search]);

  const getSuggestions = async () => {
    setLoading(true);
    try {
      const q = new URLSearchParams();
      q.set("moods", moods.join(","));
      const res = await fetch(`/api/suggest?${q.toString()}`);
      const data = await res.json();
      setSuggestions(data.items.map((i: any) => i.book));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [selected, setSelected] = useState<Book | null>(null);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-background to-accent/10">
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">BookPulse — find, rate, and trade the books that move you</h1>
              <p className="mt-4 text-muted-foreground max-w-xl">Discover books tailored to your mood, ask our spoiler‑safe chatbot for hints, and buy or sell used books with the community.</p>

              <div id="mood" className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <MoodSelector value={moods as any} onChange={(m) => setMoods(m)} limit={5} />
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={getSuggestions} className="whitespace-nowrap" disabled={loading || moods.length===0}>{loading ? "Suggesting..." : "Find books"}</Button>
                  <a href="/marketplace" className="inline-block"><Button variant="outline">Marketplace</Button></a>
                </div>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">Select up to 5 moods to get tailored recommendations.</div>
            </div>

            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {featured.map((b) => (
                  <BookCard key={b.id} book={b} onOpen={(bk) => setSelected(bk)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-bold">Suggestions</h2>
        {suggestions.length === 0 ? (
          <p className="text-muted-foreground mt-2">No suggestions yet. Pick moods and click "Find books".</p>
        ) : (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {suggestions.map((s) => (
              <BookCard key={s.id} book={s} onOpen={(bk) => setSelected(bk)} />
            ))}
          </div>
        )}
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-bold">Why BookPulse</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Spoiler‑safe chatbot</h3>
            <p className="text-muted-foreground mt-2">Ask for hints or context without ruining the story. Great for book clubs and curious readers.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Mood based discovery</h3>
            <p className="text-muted-foreground mt-2">Pick emotional keywords and find books that match how you want to feel.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Community marketplace</h3>
            <p className="text-muted-foreground mt-2">Buy and sell used books with seller ratings coming soon.</p>
          </div>
        </div>
      </section>

      <ChatWidget />
      <BookModal book={selected} open={!!selected} onClose={() => setSelected(null)} />
    </Layout>
  );
}
