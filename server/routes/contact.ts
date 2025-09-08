import { RequestHandler } from "express";

export const handleContact: RequestHandler = (req, res) => {
  const { name, email, message, type } = req.body ?? {};
  if (!email) return res.status(400).json({ error: "Email is required" });

  // In production you'd send an email, save to DB, or forward to a ticketing system.
  // For this demo we just log and return success.
  console.info("Contact form submission:", { name, email, message, type });

  res.status(201).json({ ok: true });
};
