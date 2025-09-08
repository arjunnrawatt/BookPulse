import React, { useState, useRef, useEffect } from "react";
import * as Router from "react-router-dom";
import { cn } from "@/lib/utils";

export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = Router.useNavigate();

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (e.target instanceof Node && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!q.trim()) return;
    setOpen(false);
    navigate(`/?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div ref={ref} className="flex items-center">
      <form onSubmit={submit} className={"flex items-center gap-2 transition-all " + (open ? "w-64" : "w-8")}> 
        <button type="button" onClick={() => setOpen((v) => !v)} className={"h-8 w-8 rounded-md flex items-center justify-center " + (open ? "bg-accent/10" : "bg-transparent") } aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17.65 17.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.15 14.65z" />
          </svg>
        </button>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search books, authors..." 
          className={cn("rounded-md border px-3 py-2 text-sm transition-all", open ? "opacity-100 visible w-52" : "opacity-0 invisible w-0")}
        />
      </form>
    </div>
  );
}
