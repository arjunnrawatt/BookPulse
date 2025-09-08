import { RequestHandler } from "express";
import { books } from "../data";
import { ChatBooksRequest, ChatBooksResponse } from "@shared/api";
import { chatForBook } from "../utils";

export const chatBooks: RequestHandler = (req, res) => {
  const body = (req.body ?? {}) as ChatBooksRequest;
  if (!body.question || typeof body.question !== "string") {
    res.status(400).json({ error: "'question' is required" });
    return;
  }
  const response: ChatBooksResponse = chatForBook(books, body);
  res.json(response);
};
