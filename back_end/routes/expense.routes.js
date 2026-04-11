import express from "express";
import { createExpense } from "./controllers/expense.controller.js";

const router = express.Router();

router.post("/", createExpense);

export default router;
