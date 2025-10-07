import express from "express";
import db from "../config/db.js"; // ✅ tambahkan ini
import {
  createAnggota,
  getAnggota,
  getAnggotaById,
  updateAnggota,
  deleteAnggota,
} from "../controllers/struktur.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// ✅ route khusus harus diletakkan SEBELUM "/:id"
router.get("/ketua", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM struktur_organisasi WHERE jabatan LIKE '%Ketua%' LIMIT 1"
    );

    if (!rows.length) {
      return res.status(404).json({ message: "Ketua tidak ditemukan." });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("Error ambil data ketua:", err);
    res.status(500).json({ message: "Gagal memuat data ketua." });
  }
});

// publik
router.get("/", getAnggota);
router.get("/:id", getAnggotaById);

// hanya superadmin
router.post(
  "/",
  verifyToken,
  checkRole(["superadmin"]),
  upload.single("foto"),
  createAnggota
);

router.put(
  "/:id",
  verifyToken,
  checkRole(["superadmin"]),
  upload.single("foto"),
  updateAnggota
);

router.delete("/:id", verifyToken, checkRole(["superadmin"]), deleteAnggota);

export default router;
