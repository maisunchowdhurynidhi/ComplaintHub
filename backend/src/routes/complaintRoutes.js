import { Router } from "express";
import {
  addProgressUpdate,
  assignComplaint,
  createComplaint,
  getAllComplaints,
  getComplaintHistory,
  getComplaintMapLocations,
  getComplaintStatusById,
  updateComplaintPriority,
  updateComplaintStatus,
  getSimilarComplaints
} from "../controllers/complaintController.js";

const router = Router();

router.get("/map/locations", getComplaintMapLocations);
router.post("/", createComplaint);
router.get("/", getAllComplaints);
router.get("/history", getComplaintHistory);
router.get("/search", getSimilarComplaints);
router.patch("/:complaintId/assign", assignComplaint);
router.post("/:complaintId/progress", addProgressUpdate);
router.get("/:complaintId/status", getComplaintStatusById);
router.patch("/:complaintId/status", updateComplaintStatus);
router.patch("/:complaintId/priority", updateComplaintPriority);

export default router;
