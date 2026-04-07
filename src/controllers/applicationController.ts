import { Request, Response } from "express";
import {
  getApplicationsService,
  createApplicationService,
  deleteApplicationService,
  updateApplicationService,
} from "../services/applicationService";

// GET all
export const getApplications = (req: Request, res: Response): void => {
  const data = getApplicationsService();
  res.status(200).json({ data });
};

// POST
export const createApplication = (req: Request, res: Response): void => {
  const { name } = req.body;
  const result = createApplicationService(name);

  res.status(201).json({ data: result });
};

// DELETE
export const deleteApplication = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const result = deleteApplicationService(id);

  res.status(200).json({ success: result });
};

// UPDATE
export const updateApplication = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const { name } = req.body;

  const updated = updateApplicationService(id, name);

  res.status(200).json({ data: updated });
};