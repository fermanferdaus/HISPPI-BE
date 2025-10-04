import express from "express";
import {
  createPartner,
  getPartners,
  getPartnerById,
  updatePartner,
  deletePartner,
} from "../controllers/partner.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// publik
router.get("/", getPartners);
router.get("/:id", getPartnerById);

// hanya superadmin
router.post(
  "/",
  verifyToken,
  checkRole(["superadmin"]),
  upload.single("logo"),
  createPartner
);

router.put(
  "/:id",
  verifyToken,
  checkRole(["superadmin"]),
  upload.single("logo"),
  updatePartner
);

router.delete("/:id", verifyToken, checkRole(["superadmin"]), deletePartner);

export default router;
