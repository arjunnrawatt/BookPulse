import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { ChatBooksResponse } from "@shared/api";

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi! Ask me anything about books. I give spoiler‑free hints and recommendations." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const q = input.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput("");
    const res = await (await import("@/lib/api")).fetchWithFallback("/api/chatbooks", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: q }) });
    const data = (await res.json()) as ChatBooksResponse | { error: string };
    if ("answer" in data) {
      setMessages((m) => [...m, { role: "assistant", content: data.answer }]);
    } else {
      setMessages((m) => [...m, { role: "assistant", content: data.error }]);
    }
  };

  return (
    <div id="chat" className="fixed bottom-4 right-4 w-full sm:w-80">
      <div className="rounded-xl border bg-background shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b">
          <div className="flex items-center gap-2"><span className="text-lg">💬</span><span className="font-semibold">BookPulse Chat</span></div>
          <Button size="sm" variant="ghost" onClick={() => setOpen((v) => !v)}>{open ? "–" : "+"}</Button>
        </div>
        {open && (
          <div className="flex flex-col">
            <div className="h-64 overflow-y-auto p-3 space-y-2">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div className={m.role === "user" ? "inline-block bg-primary text-primary-foreground px-3 py-2 rounded-xl" : "inline-block bg-secondary px-3 py-2 rounded-xl"}>
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="p-3 flex items-center gap-2 border-t">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about a book or mood..."
                className="flex-1 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button size="sm" onClick={send}>Send</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
