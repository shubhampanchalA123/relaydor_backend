import express from "express";
import {
  addPatient,
  getMyPatients,
  getPatientById,
  updatePatient,
  deletePatient
} from "../controllers/PatientController.js";
import roleAuthMiddleware from "../middlewares/roleAuthMiddleware.js"; // renamed middleware

const router = express.Router();

// ------------------------------
// All routes protected for doctors only
// ------------------------------

// Add new patient
router.post("/", roleAuthMiddleware(["doctor"]), addPatient);

// Get all patients of logged-in doctor
router.get("/", roleAuthMiddleware(["doctor"]), getMyPatients);

// Get single patient by ID
router.get("/:id", roleAuthMiddleware(["doctor"]), getPatientById);

// Update patient
router.put("/:id", roleAuthMiddleware(["doctor"]), updatePatient);

// Delete patient
router.delete("/:id", roleAuthMiddleware(["doctor"]), deletePatient);

export default router;
