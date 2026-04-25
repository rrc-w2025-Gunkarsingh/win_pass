import express, { Router } from "express";
import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication
} from "../controllers/applicationController";

const router: Router = express.Router();

router.get("/applications", getApplications);
router.post("/applications", createApplication);
router.put("/applications/:id", updateApplication);
router.delete("/applications/:id", deleteApplication);

export default router;

