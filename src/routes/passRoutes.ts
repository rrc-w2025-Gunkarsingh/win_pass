import express from "express";
import {
  createTicket,
  getTickets,
  verifyTicket,
  useTicket
} from "../controllers/passController";

const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);
router.get("/verify/:id", verifyTicket);
router.post("/use/:id", useTicket);

export default router;