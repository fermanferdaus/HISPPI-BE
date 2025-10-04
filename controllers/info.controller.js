import db from "../config/db.js";

export async function getInfo(req, res) {
  const [rows] = await db.query(
    "SELECT section, content FROM institution_info"
  );
  res.json(rows);
}

export async function updateInfo(req, res) {
  const { section } = req.params; // ex: 'visi'
  const { content } = req.body;
  await db.query("UPDATE institution_info SET content=? WHERE section=?", [
    content,
    section,
  ]);
  res.json({ message: `${section} updated` });
}
