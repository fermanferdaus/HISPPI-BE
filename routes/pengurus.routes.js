import express from "express";
import {
  getAllPengurus,
  createPengurus,
  updatePengurus,
  deletePengurus,
} from "../controllers/pengurus.controller.js";

const router = express.Router();

// GET semua data
router.get("/", getAllPengurus);

// POST tambah data
router.post("/", createPengurus);

// PUT update
router.put("/:id", updatePengurus);

// DELETE hapus
router.delete("/:id", deletePengurus);

export default router;
