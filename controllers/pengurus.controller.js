import db from "../config/db.js"; // sesuaikan dengan koneksi db

// GET semua data
export const getAllPengurus = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM sejarah_kepengurusan ORDER BY periode ASC");
    res.json(rows);
  } catch (error) {
    console.error("❌ Error getAllPengurus:", error);
    res.status(500).json({ message: "Gagal mengambil data kepengurusan" });
  }
};

// POST tambah data
export const createPengurus = async (req, res) => {
  try {
    const { periode, ketua_umum, sekjen } = req.body;
    await db.query(
      "INSERT INTO sejarah_kepengurusan (periode, ketua_umum, sekjen) VALUES (?, ?, ?)",
      [periode, ketua_umum, sekjen]
    );
    res.json({ message: "Data kepengurusan berhasil ditambahkan" });
  } catch (error) {
    console.error("❌ Error createPengurus:", error);
    res.status(500).json({ message: "Gagal menambahkan data" });
  }
};

// UPDATE
export const updatePengurus = async (req, res) => {
  try {
    const { id } = req.params;
    const { periode, ketua_umum, sekjen } = req.body;
    await db.query(
      "UPDATE sejarah_kepengurusan SET periode=?, ketua_umum=?, sekjen=? WHERE id=?",
      [periode, ketua_umum, sekjen, id]
    );
    res.json({ message: "Data kepengurusan berhasil diperbarui" });
  } catch (error) {
    console.error("❌ Error updatePengurus:", error);
    res.status(500).json({ message: "Gagal memperbarui data" });
  }
};

// DELETE
export const deletePengurus = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM sejarah_kepengurusan WHERE id=?", [id]);
    res.json({ message: "Data kepengurusan berhasil dihapus" });
  } catch (error) {
    console.error("❌ Error deletePengurus:", error);
    res.status(500).json({ message: "Gagal menghapus data" });
  }
};
