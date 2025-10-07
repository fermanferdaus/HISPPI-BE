import express from "express";
import {
  createDPD,
  getAllDPD,
  getDPDById,
  updateDPD,
  deleteDPD,
} from "../controllers/dpd.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// publik
router.get("/", getAllDPD);
router.get("/:id", getDPDById);

// hanya superadmin
router.post(
  "/",
  verifyToken,
  checkRole(["superadmin"]),
  upload.single("foto"),
  createDPD
);

router.put(
  "/:id",
  verifyToken,
  checkRole(["superadmin"]),
  upload.single("foto"),
  updateDPD
);

router.delete("/:id", verifyToken, checkRole(["superadmin"]), deleteDPD);

export default router;
