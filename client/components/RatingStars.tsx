import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  value: number;
  onChange?: (v: number) => void;
  size?: "sm" | "md" | "lg";
};

export default function RatingStars({ value, onChange, size = "md" }: Props) {
  const [hover, setHover] = useState<number | null>(null);
  const stars = [1, 2, 3, 4, 5];
  const sizeCls = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";
  return (
    <div className="inline-flex items-center gap-1" role="radiogroup" aria-label="Rating">
      {stars.map((s) => (
        <button
          key={s}
          role="radio"
          aria-checked={(hover ?? value) >= s}
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(null)}
          onClick={() => onChange?.(s)}
          className={cn("transition-colors", (hover ?? value) >= s ? "text-primary" : "text-muted-foreground")}
        >
          <svg viewBox="0 0 20 20" className={sizeCls} aria-hidden>
            <path d="M10 1.5l2.7 5.5 6 .9-4.3 4.2 1 6L10 15l-5.4 3 1-6L1.3 7.9l6-.9L10 1.5z" fill="currentColor" />
          </svg>
        </button>
      ))}
    </div>
  );
}
