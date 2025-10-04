import express from "express";
import {
  getAllPengurus,
  getKepengurusanById,
  createPengurus,
  updatePengurus,
  deletePengurus,
} from "../controllers/pengurus.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";

const router = express.Router();

// publik
router.get("/", getAllPengurus);
router.get("/:id", getKepengurusanById);

// hanya superadmin
router.post("/", verifyToken, checkRole(["superadmin"]), createPengurus);
router.put("/:id", verifyToken, checkRole(["superadmin"]), updatePengurus);
router.delete("/:id", verifyToken, checkRole(["superadmin"]), deletePengurus);

export default router;
