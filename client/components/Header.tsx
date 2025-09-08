import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import * as Router from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import SearchBox from "@/components/SearchBox";

export default function Header() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (e.target instanceof Node && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Router.Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary font-extrabold">📚</span>
          <span className="text-xl font-extrabold tracking-tight">BookPulse</span>
        </Router.Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Router.NavLink to="/" className={({ isActive }) => cn("hover:text-primary", isActive && "text-primary font-semibold")}>Home</Router.NavLink>
          <Router.NavLink to="/marketplace" className={({ isActive }) => cn("hover:text-primary", isActive && "text-primary font-semibold")}>Marketplace</Router.NavLink>
          <a href="#mood" className="hover:text-primary">Mood Picks</a>

          <div className="relative">
            <div ref={ref} className="relative inline-flex items-center">
              <button
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 hover:text-primary"
              >
                What's New 🚀
              </button>

              <div
                role="menu"
                aria-hidden={!open}
                className={
                  "transition-all absolute right-0 top-full mt-1 w-56 rounded-md border bg-card p-2 shadow-lg z-50 " +
                  (open ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 pointer-events-none")
                }
              >
                <Router.Link to="/?sort=newest" className="block px-3 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>Newest</Router.Link>
                <Router.Link to="/?sort=popular" className="block px-3 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>Most popular</Router.Link>
                <Router.Link to="/?sort=selling" className="block px-3 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>Most selling</Router.Link>
                <Router.Link to="/?sort=trending" className="block px-3 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>Trending</Router.Link>
                <Router.Link to="/?sort=editors" className="block px-3 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>Editors' picks</Router.Link>
              </div>
            </div>
          </div>

          <a href="#chat" className="hover:text-primary">Chat</a>

          {/* Search icon and expandable input */}
          <div className="relative">
            <SearchBox />
          </div>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="hidden sm:block text-sm text-muted-foreground">Hi, {user.name || user.email}</span>
              <Button variant="outline" onClick={signOut}>Sign out</Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost"><Router.Link to="/auth">Sign in</Router.Link></Button>
              <Button asChild><Router.Link to="/auth?signup=1">Create account</Router.Link></Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
