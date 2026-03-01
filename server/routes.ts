import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Static site mode: No backend API needed for contact form
  app.post("/api/contact", (req, res) => {
    res.status(200).json({ message: "Success (Mock)" });
  });

  return httpServer;
}
