import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "ok" | "error">("idle");

  const subscribe = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await (await import("@/lib/api")).fetchWithFallback("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "newsletter", email }) });
      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("ok");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <footer className="border-t mt-16">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary font-extrabold">📚</div>
            <div>
              <div className="font-extrabold text-lg">BookPulse</div>
              <div className="text-sm text-muted-foreground">Find, rate, and trade the books that move you.</div>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">Built with ❤️ for readers. Want new features or partnerships? Reach out.</div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-8">
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/marketplace" className="hover:text-primary">Marketplace</a></li>
              <li><a href="/auth" className="hover:text-primary">Sign in</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Help Center</a></li>
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
              <li><a href="#" className="hover:text-primary">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Stay in the loop</h4>
          <p className="text-sm text-muted-foreground mt-2">Subscribe for new picks, marketplace deals, and product updates.</p>
          <form className="mt-4 flex items-center gap-2" onSubmit={subscribe}>
            <input placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-md border px-3 py-2 text-sm" type="email" />
            <button className="rounded-md bg-primary px-3 py-2 text-white text-sm" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Subscribe"}</button>
          </form>
          {status === "ok" && <div className="mt-2 text-sm text-green-600">Thanks — check your inbox!</div>}
          {status === "error" && <div className="mt-2 text-sm text-red-600">Something went wrong. Try again later.</div>}

          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <a href="#" aria-label="twitter" className="hover:text-primary">🐦 Twitter</a>
            <a href="#" aria-label="instagram" className="hover:text-primary">📸 Instagram</a>
            <a href="#" aria-label="github" className="hover:text-primary">💻 GitHub</a>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} BookPulse. All rights reserved.</div>
          <div className="mt-2 sm:mt-0">Built by Book lovers • <a href="#" className="hover:text-primary">Report an issue</a></div>
        </div>
      </div>
    </footer>
  );
}
