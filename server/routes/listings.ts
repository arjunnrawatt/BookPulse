import { RequestHandler } from "express";
import { listings, books } from "../data";
import { CreateListingRequest, ListingsResponse, Listing } from "@shared/api";

export const getListings: RequestHandler = (_req, res) => {
  const response: ListingsResponse = { items: listings };
  res.json(response);
};

export const createListing: RequestHandler = (req, res) => {
  const body = (req.body ?? {}) as CreateListingRequest & { sellerId?: string };
  const book = books.find((b) => b.id === body.bookId);
  if (!book) return res.status(400).json({ error: "Invalid bookId" });
  if (typeof body.priceCents !== "number" || body.priceCents <= 0)
    return res.status(400).json({ error: "Invalid priceCents" });
  const listing: Listing = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sellerId: body.sellerId ?? "guest",
    book,
    condition: body.condition,
    priceCents: Math.round(body.priceCents),
    location: body.location,
    createdAt: new Date().toISOString(),
  };
  listings.unshift(listing);
  res.status(201).json(listing);
};

export const deleteListing: RequestHandler = (req, res) => {
  const id = req.params.id;
  const idx = listings.findIndex((l) => l.id === id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  listings.splice(idx, 1);
  res.status(204).end();
};
