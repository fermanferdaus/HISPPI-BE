import db from "../config/db.js";
import bcrypt from "bcrypt";

// ✅ CREATE USER (superadmin only)
export async function createUser(req, res) {
  const { name, email, password, role } = req.body;

  try {
    // validasi input
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // cek apakah email sudah digunakan
    const [exist] = await db.query("SELECT id FROM users WHERE email = ?", [
      email,
    ]);
    if (exist.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // enkripsi password
    const hash = await bcrypt.hash(password, 10);

    // simpan user baru
    await db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hash, role]
    );

    res.json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

// ✅ GET USERS (superadmin only, optional filter by role)
export async function getUsers(req, res) {
  try {
    const { role } = req.query; // contoh: ?role=admin
    let query = "SELECT id, name, email, role, created_at FROM users";
    const params = [];

    if (role) {
      query += " WHERE role = ?";
      params.push(role);
    }

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Error fetching users" });
  }
}

// ✅ UPDATE USER (superadmin only)
export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    // ambil user lama
    const [existing] = await db.query("SELECT * FROM users WHERE id=?", [id]);
    if (existing.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = existing[0];

    // update dengan data baru (jika dikirim)
    const updatedName = name || user.name;
    const updatedEmail = email || user.email;
    const updatedRole = role || user.role;

    let updatedPassword = user.password;
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    await db.query(
      "UPDATE users SET name=?, email=?, password=?, role=? WHERE id=?",
      [updatedName, updatedEmail, updatedPassword, updatedRole, id]
    );

    res.json({ message: "User updated successfully" });
  } catch (err) {
    console.error("Error updating user:", err);
    res
      .status(500)
      .json({ message: "Error updating user", error: err.message });
  }
}

// ✅ DELETE USER (superadmin only)
export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM users WHERE id=?", [id]);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res
      .status(500)
      .json({ message: "Error deleting user", error: err.message });
  }
}
