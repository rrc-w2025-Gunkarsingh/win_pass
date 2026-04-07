import express, { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware";
import {
  getApplications,
  createApplication,
  deleteApplication,
  updateApplication
} from "../controllers/applicationController";
const router: Router = express.Router();

router.get("/applications", getApplications);

router.post("/applications", verifyToken, createApplication);

router.delete("/applications/:id", verifyToken, deleteApplication);

router.put("/applications/:id", verifyToken, updateApplication);

export default router;