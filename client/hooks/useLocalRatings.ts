import { useEffect, useState } from "react";

const LS_KEY = "bookpulse_ratings";

export function useLocalRatings() {
  const [ratings, setRatings] = useState<Record<string, number>>({});

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) setRatings(JSON.parse(raw));
  }, []);

  const rate = (bookId: string, value: number) => {
    setRatings((r) => {
      const next = { ...r, [bookId]: value };
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  };

  return { ratings, rate };
}
