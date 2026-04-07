import { Request, Response } from "express";
import {
  createPass,
  getAllPasses,
  getPassById
} from "../services/passService";

export const createTicket = async (req: Request, res: Response) => {
  try {
    const pass = await createPass(req.body);
    res.status(201).json(pass);
  } catch (error) {
    res.status(500).json({ message: "Error creating pass" });
  }
};

export const getTickets = (req: Request, res: Response) => {
  res.json(getAllPasses());
};

export const verifyTicket = (req: Request, res: Response) => {
  const pass = getPassById(req.params.id as string);

  if (!pass) {
    return res.status(404).json({ valid: false });
  }

  res.json({ valid: true, pass });
};