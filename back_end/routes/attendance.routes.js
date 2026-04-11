import express from "express";
import {
  createService,
  recordAttendance,
  getAttendance,
} from "../controllers/attendance.controller.js";

const router = express.Router();

router.post("/service", createService);
router.post("/", recordAttendance);
router.get("/", getAttendance);

export default router;
