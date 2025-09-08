import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { getBooks } from "./routes/books";
import { suggestBooks } from "./routes/suggest";
import { chatBooks } from "./routes/chatbooks";
import { createListing, deleteListing, getListings } from "./routes/listings";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health/ping
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  // Demo
  app.get("/api/demo", handleDemo);

  // Books and suggestions
  app.get("/api/books", getBooks);
  app.get("/api/suggest", suggestBooks); // moods comma-separated query param

  // Chatbot
  app.post("/api/chatbooks", chatBooks);

  // Listings (in-memory)
  app.get("/api/listings", getListings);
  app.post("/api/listings", createListing);
  app.delete("/api/listings/:id", deleteListing);

  // Contact form (demo)
  app.post("/api/contact", require("./routes/contact").handleContact);

  return app;
}
