import { cn } from "@/lib/utils";
import type { MoodKey } from "@shared/api";

const MOODS: MoodKey[] = [
  "sad",
  "angry",
  "heartbroken",
  "betrayal",
  "furious",
  "curious",
  "motivated",
  "romantic",
  "hopeful",
  "adventurous",
  "nostalgic",
  "dark",
  "wholesome",
  "mysterious",
  "funny",
  "tragic",
];

export default function MoodSelector({
  value,
  onChange,
  limit = 5,
}: {
  value: MoodKey[];
  onChange: (m: MoodKey[]) => void;
  limit?: number;
}) {
  const toggle = (m: MoodKey) => {
    const set = new Set(value);
    if (set.has(m)) set.delete(m);
    else if (value.length < limit) set.add(m);
    onChange(Array.from(set));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {MOODS.map((m) => {
        const active = value.includes(m);
        return (
          <button
            key={m}
            onClick={() => toggle(m)}
            className={cn(
              "rounded-full px-3 py-1 text-sm border transition",
              active ? "bg-primary text-primary-foreground border-transparent" : "bg-background hover:bg-accent text-foreground",
            )}
          >
            {m}
          </button>
        );
      })}
    </div>
  );
}
