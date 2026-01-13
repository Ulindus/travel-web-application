import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import bookingRoutes from "./routes/booking.js";
import destinationRoutes from "./routes/destination.js";

dotenv.config();

const app = express(); // ✅ CREATE APP FIRST

// Connect DB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/destination", destinationRoutes); // ✅ MOVED HERE

// Test route
app.get("/", (req, res) => {
  res.json({ msg: "Travel App Backend running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
