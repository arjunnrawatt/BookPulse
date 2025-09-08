/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

// Core domain types
export type MoodKey =
  | "sad"
  | "angry"
  | "heartbroken"
  | "betrayal"
  | "furious"
  | "curious"
  | "motivated"
  | "romantic"
  | "hopeful"
  | "adventurous"
  | "nostalgic"
  | "dark"
  | "wholesome"
  | "mysterious"
  | "funny"
  | "tragic";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  synopsis: string;
  genres: string[];
  moods: MoodKey[];
  hints: string[]; // spoiler-free hints
  year?: number;
  communityRating?: number; // 0-5
}

export interface SuggestBooksResponse {
  moods: MoodKey[];
  items: Array<{
    book: Book;
    score: number; // 0..1 relevance
    reasons: string[];
  }>;
}

export interface ChatBooksRequest {
  question: string;
  bookId?: string;
}

export interface ChatBooksResponse {
  answer: string;
  related?: { id: string; title: string }[];
}

// Marketplace
export interface Listing {
  id: string;
  sellerId: string;
  book: Book;
  condition: "new" | "like_new" | "good" | "fair" | "poor";
  priceCents: number;
  location?: string;
  createdAt: string;
}

export interface CreateListingRequest {
  bookId: string;
  condition: Listing["condition"];
  priceCents: number;
  location?: string;
}

export interface ListingsResponse {
  items: Listing[];
}

// Auth (client-only demo types)
export interface User {
  id: string;
  email: string;
  name?: string;
}
