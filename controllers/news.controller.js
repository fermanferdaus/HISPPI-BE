import db from "../config/db.js";

export async function createNews(req, res) {
  const { title, content, category_id, author_name } = req.body;
  const author_id = req.user.id;
  const image = req.file ? req.file.filename : null;

  await db.query(
    "INSERT INTO news (title, content, category_id, author_id, author_name, image) VALUES (?, ?, ?, ?, ?, ?)",
    [title, content, category_id, author_id, author_name, image]
  );

  res.json({ message: "News created" });
}

export async function getNews(req, res) {
  const [rows] = await db.query(`
    SELECT n.id, n.title, n.content, n.author_name, n.image, 
           c.name AS category, u.name AS user_creator, n.created_at
    FROM news n
    LEFT JOIN categories c ON n.category_id = c.id
    LEFT JOIN users u ON n.author_id = u.id
    ORDER BY n.created_at DESC
  `);
  res.json(rows);
}

export async function updateNews(req, res) {
  const { id } = req.params;
  const { title, content, category_id, author_name } = req.body;
  const image = req.file ? req.file.filename : null;

  if (image) {
    await db.query(
      "UPDATE news SET title=?, content=?, category_id=?, author_name=?, image=? WHERE id=?",
      [title, content, category_id, author_name, image, id]
    );
  } else {
    await db.query(
      "UPDATE news SET title=?, content=?, category_id=?, author_name=? WHERE id=?",
      [title, content, category_id, author_name, id]
    );
  }

  res.json({ message: "News updated" });
}

export async function deleteNews(req, res) {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM news WHERE id=?", [id]);
    res.json({ message: "News deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting news", error: err.message });
  }
}
