import express from "express";
import {
  createNews,
  getNews,
  updateNews,
  deleteNews,
} from "../controllers/news.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";
import upload from "../middlewares/upload.middleware.js";
import db from "../config/db.js";

const router = express.Router();

// Tambah berita dengan upload gambar
router.post(
  "/",
  verifyToken,
  checkRole(["admin", "superadmin"]),
  (req, res, next) => {
    upload.single("image")(req, res, (err) => {
      if (err) return res.status(400).json({ message: err.message });
      next();
    });
  },
  createNews
);

router.get("/", getNews);

router.put(
  "/:id",
  verifyToken,
  checkRole(["admin", "superadmin"]),
  (req, res, next) => {
    upload.single("image")(req, res, (err) => {
      if (err) return res.status(400).json({ message: err.message });
      next();
    });
  },
  updateNews
);

router.delete(
  "/:id",
  verifyToken,
  checkRole(["admin", "superadmin"]),
  deleteNews
);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM news WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "News not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching news detail", error: err.message });
  }
});

export default router;
