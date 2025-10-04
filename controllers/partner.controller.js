import db from "../config/db.js";
import fs from "fs";
import path from "path";

// ✅ CREATE
export async function createPartner(req, res) {
  const { name, url } = req.body;
  const logo = req.file ? req.file.filename : null;

  if (!logo) return res.status(400).json({ message: "Logo wajib diupload." });

  try {
    await db.query("INSERT INTO partners (name, logo, url) VALUES (?, ?, ?)", [
      name,
      logo,
      url,
    ]);
    res.json({ message: "Partner berhasil ditambahkan." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menambahkan partner." });
  }
}

// ✅ READ
export async function getPartners(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT * FROM partners ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal mengambil data partners." });
  }
}

export async function getPartnerById(req, res) {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM partners WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Partner tidak ditemukan" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Error getPartnerById:", err);
    res.status(500).json({ message: "Gagal memuat data partner" });
  }
}

// ✅ UPDATE
export async function updatePartner(req, res) {
  const { id } = req.params;
  const { name, url } = req.body;
  const newLogo = req.file ? req.file.filename : null;

  try {
    // ambil data lama
    const [oldData] = await db.query("SELECT * FROM partners WHERE id=?", [id]);
    if (!oldData.length) {
      if (newLogo) fs.unlinkSync(`./uploads/${newLogo}`);
      return res.status(404).json({ message: "Partner tidak ditemukan." });
    }

    const oldLogo = oldData[0].logo;

    // hapus logo lama kalau ada logo baru
    if (newLogo && oldLogo) {
      const oldPath = path.join("./uploads", oldLogo);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    const logoToSave = newLogo || oldLogo;

    await db.query("UPDATE partners SET name=?, logo=?, url=? WHERE id=?", [
      name,
      logoToSave,
      url,
      id,
    ]);

    res.json({ message: "Partner berhasil diperbarui." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal memperbarui partner." });
  }
}

// ✅ DELETE
export async function deletePartner(req, res) {
  const { id } = req.params;

  try {
    const [rows] = await db.query("SELECT * FROM partners WHERE id=?", [id]);
    if (!rows.length)
      return res.status(404).json({ message: "Partner tidak ditemukan." });

    const logo = rows[0].logo;
    if (logo && fs.existsSync(`./uploads/${logo}`)) {
      fs.unlinkSync(`./uploads/${logo}`);
    }

    await db.query("DELETE FROM partners WHERE id=?", [id]);
    res.json({ message: "Partner berhasil dihapus." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menghapus partner." });
  }
}
