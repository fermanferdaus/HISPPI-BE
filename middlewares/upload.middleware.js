import multer from "multer";
import path from "path";
import fs from "fs";

// 📁 Folder dasar upload
const BASE_UPLOAD_DIR = "uploads";

// 🔹 Pastikan folder ada (otomatis buat jika belum)
if (!fs.existsSync(BASE_UPLOAD_DIR)) {
  fs.mkdirSync(BASE_UPLOAD_DIR, { recursive: true });
}

// 🔹 Konfigurasi penyimpanan dinamis (bisa upload ke subfolder berbeda)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = BASE_UPLOAD_DIR;

    // buat folder kalau belum ada
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, unique + ext);
  },
});

// 🔹 Filter file gambar
function fileFilter(req, file, cb) {
  const allowed = /jpeg|jpg|png/;
  const isValidMime = allowed.test(file.mimetype);
  const isValidExt = allowed.test(path.extname(file.originalname).toLowerCase());

  if (isValidMime && isValidExt) {
    cb(null, true);
  } else {
    cb(new Error("Hanya file .jpg, .jpeg, atau .png yang diizinkan!"));
  }
}

// 🔹 Konfigurasi multer utama
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // batas 2 MB
  fileFilter,
});

export default upload;
