import express from "express";
import {
  addContribution,
  getContributions,
} from "./controllers/contribution.controller.js";

const router = express.Router();

router.post("/", addContribution);
router.get("/", getContributions);

export default router;
