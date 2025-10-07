import db from "../config/db.js";
import fs from "fs";
import path from "path";

// ✅ CREATE
export async function createDPD(req, res) {
  const { nama, provinsi, alamat_sekretariat, nomor } = req.body;
  const foto = req.file ? req.file.filename : null;

  try {
    await db.query(
      "INSERT INTO dewan_pengurus_daerah (nama, provinsi, alamat_sekretariat, nomor, foto) VALUES (?, ?, ?, ?, ?)",
      [nama, provinsi, alamat_sekretariat, nomor, foto]
    );
    res.json({ message: "Data DPD berhasil ditambahkan." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menambahkan DPD." });
  }
}

// ✅ READ (semua DPD)
export async function getAllDPD(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT * FROM dewan_pengurus_daerah ORDER BY id DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal mengambil data DPD." });
  }
}

// ✅ READ by ID
export async function getDPDById(req, res) {
  try {
    const { id } = req.params;
    const [rows] = await db.query(
      "SELECT * FROM dewan_pengurus_daerah WHERE id = ?",
      [id]
    );
    if (!rows.length)
      return res.status(404).json({ message: "Data DPD tidak ditemukan." });

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Gagal mengambil data DPD berdasarkan ID." });
  }
}

// ✅ UPDATE
export async function updateDPD(req, res) {
  const { id } = req.params;
  const { nama, provinsi, alamat_sekretariat, nomor } = req.body;
  const newFoto = req.file ? req.file.filename : null;

  try {
    const [oldData] = await db.query(
      "SELECT * FROM dewan_pengurus_daerah WHERE id=?",
      [id]
    );
    if (!oldData.length) {
      if (newFoto) fs.unlinkSync(`./uploads/${newFoto}`);
      return res.status(404).json({ message: "Data DPD tidak ditemukan." });
    }

    const oldFoto = oldData[0].foto;

    // hapus foto lama kalau ada foto baru
    if (newFoto && oldFoto) {
      const oldPath = path.join("./uploads", oldFoto);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    const fotoToSave = newFoto || oldFoto;

    await db.query(
      "UPDATE dewan_pengurus_daerah SET nama=?, provinsi=?, alamat_sekretariat=?, nomor=?, foto=? WHERE id=?",
      [nama, provinsi, alamat_sekretariat, nomor, fotoToSave, id]
    );

    res.json({ message: "Data DPD berhasil diperbarui." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal memperbarui data DPD." });
  }
}

// ✅ DELETE
export async function deleteDPD(req, res) {
  const { id } = req.params;

  try {
    const [rows] = await db.query(
      "SELECT * FROM dewan_pengurus_daerah WHERE id=?",
      [id]
    );
    if (!rows.length)
      return res.status(404).json({ message: "Data DPD tidak ditemukan." });

    const foto = rows[0].foto;
    if (foto && fs.existsSync(`./uploads/${foto}`)) {
      fs.unlinkSync(`./uploads/${foto}`);
    }

    await db.query("DELETE FROM dewan_pengurus_daerah WHERE id=?", [id]);
    res.json({ message: "Data DPD berhasil dihapus." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menghapus data DPD." });
  }
}
