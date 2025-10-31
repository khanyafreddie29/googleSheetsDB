import express from "express";
import { recordAttendance, getAttendance, deleteAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

// POST /api/attendance
router.post("/recordAttendance", recordAttendance);

// GET /api/attendance
router.get("/getAttendance", getAttendance);

// delete records
router.delete("/deleteAttendance", deleteAttendance );

export default router;