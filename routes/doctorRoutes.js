import express from "express";
import { updateAvailability, getDoctorList } from "../controllers/doctorController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.put("/availabilityUpdate", authMiddleware, updateAvailability);
router.get("/list", authMiddleware, getDoctorList);

export default router;
