import express from "express";
import {
  createTicket,
  getTickets,
  verifyTicket
} from "../controllers/passController";

const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);
router.get("/verify/:id", verifyTicket);

export default router;