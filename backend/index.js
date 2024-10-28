import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { getNews } from "./controllers/News.js";
dotenv.config();

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";
import router from "./routes/scores.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);
app.use("/stats", router);

app.get("/news", async (req, res) => {
  const cat = req.query.category;
  try {
    if (!cat) {
      return res.status(404).json({
        error: "please add category in query params",
      });
    }
    const resp = await getNews(cat);
    console.log(resp);

    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port: ${PORT}`);
});