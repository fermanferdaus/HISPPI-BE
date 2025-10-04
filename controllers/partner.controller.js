import db from "../config/db.js";

export async function createPartner(req, res) {
  const { name, url } = req.body;
  const logo = req.file ? req.file.filename : null;

  if (!logo) return res.status(400).json({ message: "Logo is required" });

  await db.query("INSERT INTO partners (name, logo, url) VALUES (?, ?, ?)", [
    name,
    logo,
    url,
  ]);

  res.json({ message: "Partner created" });
}

export async function getPartners(req, res) {
  const [rows] = await db.query(
    "SELECT * FROM partners ORDER BY created_at DESC"
  );
  res.json(rows);
}

export async function deletePartner(req, res) {
  const { id } = req.params;
  await db.query("DELETE FROM partners WHERE id=?", [id]);
  res.json({ message: "Partner deleted" });
}
