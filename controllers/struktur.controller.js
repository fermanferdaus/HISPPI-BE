import db from "../config/db.js";
import fs from "fs";
import path from "path";

// ✅ CREATE
export async function createAnggota(req, res) {
  const { nama, jabatan, periode } = req.body;
  const foto = req.file ? req.file.filename : null;

  if (!foto)
    return res.status(400).json({ message: "Foto wajib diupload." });

  try {
    await db.query(
      "INSERT INTO struktur_organisasi (nama, jabatan, periode, foto) VALUES (?, ?, ?, ?)",
      [nama, jabatan, periode, foto]
    );
    res.json({ message: "Anggota berhasil ditambahkan." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menambahkan anggota." });
  }
}

// ✅ READ (semua anggota)
export async function getAnggota(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT * FROM struktur_organisasi ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal mengambil data anggota." });
  }
}

// ✅ READ by ID
export async function getAnggotaById(req, res) {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM struktur_organisasi WHERE id = ?", [id]);
    if (!rows.length)
      return res.status(404).json({ message: "Anggota tidak ditemukan." });

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal memuat data anggota." });
  }
}

// ✅ UPDATE
export async function updateAnggota(req, res) {
  const { id } = req.params;
  const { nama, jabatan, periode } = req.body;
  const newFoto = req.file ? req.file.filename : null;

  try {
    // ambil data lama
    const [oldData] = await db.query("SELECT * FROM struktur_organisasi WHERE id=?", [id]);
    if (!oldData.length) {
      if (newFoto) fs.unlinkSync(`./uploads/${newFoto}`);
      return res.status(404).json({ message: "Anggota tidak ditemukan." });
    }

    const oldFoto = oldData[0].foto;

    // hapus foto lama kalau ada foto baru
    if (newFoto && oldFoto) {
      const oldPath = path.join("./uploads", oldFoto);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    const fotoToSave = newFoto || oldFoto;

    await db.query(
      "UPDATE struktur_organisasi SET nama=?, jabatan=?, periode=?, foto=? WHERE id=?",
      [nama, jabatan, periode, fotoToSave, id]
    );

    res.json({ message: "Anggota berhasil diperbarui." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal memperbarui anggota." });
  }
}

// ✅ DELETE
export async function deleteAnggota(req, res) {
  const { id } = req.params;

  try {
    const [rows] = await db.query("SELECT * FROM struktur_organisasi WHERE id=?", [id]);
    if (!rows.length)
      return res.status(404).json({ message: "Anggota tidak ditemukan." });

    const foto = rows[0].foto;
    if (foto && fs.existsSync(`./uploads/${foto}`)) {
      fs.unlinkSync(`./uploads/${foto}`);
    }

    await db.query("DELETE FROM struktur_organisasi WHERE id=?", [id]);
    res.json({ message: "Anggota berhasil dihapus." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menghapus anggota." });
  }
}
