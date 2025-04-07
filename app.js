import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";



const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", authRoutes);


connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on port http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
