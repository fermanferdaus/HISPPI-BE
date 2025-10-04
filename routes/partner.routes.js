import express from "express";
import {
  createPartner,
  getPartners,
  deletePartner,
} from "../controllers/partner.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// Semua user/public bisa lihat daftar mitra
router.get("/", getPartners);

// Superadmin bisa tambah & hapus mitra
router.post(
  "/",
  verifyToken,
  checkRole(["superadmin"]),
  upload.single("logo"),
  createPartner
);
router.delete("/:id", verifyToken, checkRole(["superadmin"]), deletePartner);

export default router;
