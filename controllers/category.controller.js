import db from "../config/db.js";

export async function createCategory(req, res) {
  const { name } = req.body;
  try {
    // cek apakah kategori sudah ada
    const [rows] = await db.query("SELECT * FROM categories WHERE name = ?", [
      name,
    ]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "Category already exists" });
    }

    await db.query("INSERT INTO categories (name) VALUES (?)", [name]);
    res.json({ message: "Category created" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating category", error: err.message });
  }
}

export async function getCategories(req, res) {
  const [rows] = await db.query("SELECT * FROM categories");
  res.json(rows);
}

export async function updateCategory(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  await db.query("UPDATE categories SET name=? WHERE id=?", [name, id]);
  res.json({ message: "Category updated" });
}

export async function deleteCategory(req, res) {
  const { id } = req.params;
  await db.query("DELETE FROM categories WHERE id=?", [id]);
  res.json({ message: "Category deleted" });
}
