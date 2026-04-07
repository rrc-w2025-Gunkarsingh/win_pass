import { Request, Response } from "express";
import {
  getAllApplications,
  addApplication,
  editApplication,
  removeApplication
} from "../services/applicationService";

// GET all applications
export const getApplications = (req: Request, res: Response) => {
  const applications = getAllApplications();
  res.json(applications);
};

// CREATE application
export const createApplication = (req: Request, res: Response) => {
  try {
    const app = addApplication(req.body);
    res.status(201).json(app);
  } catch (error) {
    res.status(500).json({ message: "Error creating application" });
  }
};

// UPDATE application
export const updateApplication = (req: Request, res: Response) => {
  try {
    const id = req.params.id as string; // ✅ FIXED

    const updated = editApplication(id, req.body);

    if (!updated) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating application" });
  }
};

// DELETE application
export const deleteApplication = (req: Request, res: Response) => {
  try {
    const id = req.params.id as string; // ✅ FIXED

    const deleted = removeApplication(id);

    if (!deleted) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting application" });
  }
};