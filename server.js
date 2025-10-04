import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import newsRoutes from "./routes/news.routes.js";
import userRoutes from "./routes/users.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import infoRoutes from "./routes/info.routes.js";
import partnerRoutes from "./routes/partner.routes.js";
import pengurusRoutes from "./routes/pengurus.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/uploads", express.static("uploads"));
app.use("/api/info", infoRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/kepengurusan", pengurusRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
