import db from "../config/db.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  const { name, email, password, role } = req.body;

  // cek apakah email sudah ada
  const [exist] = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (exist.length > 0)
    return res.status(400).json({ message: "Email already exists" });

  const hash = await bcrypt.hash(password, 10);
  await db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hash, role]
  );

  res.json({ message: "User created" });
}

export async function getUsers(req, res) {
  const [rows] = await db.query(
    "SELECT id, name, email, role, created_at FROM users"
  );
  res.json(rows);
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM users WHERE id=?", [id]);
    res.json({ message: "User deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: err.message });
  }
}
