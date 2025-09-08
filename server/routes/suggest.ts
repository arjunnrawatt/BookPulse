import { RequestHandler } from "express";
import { books } from "../data";
import { MoodKey, SuggestBooksResponse } from "@shared/api";
import { scoreBookByMoods } from "../utils";

export const suggestBooks: RequestHandler = (req, res) => {
  const moodsParam = (req.query.moods as string | undefined) ?? "";
  const moods = moodsParam
    .split(",")
    .map((m) => m.trim().toLowerCase())
    .filter(Boolean) as MoodKey[];

  const items = books
    .map((book) => {
      const { score, reasons } = scoreBookByMoods(book, moods);
      return { book, score, reasons };
    })
    .filter((i) => i.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20);

  const response: SuggestBooksResponse = { moods, items };
  res.json(response);
};
