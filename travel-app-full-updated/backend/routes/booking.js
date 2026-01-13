import express from "express";
import Booking from "../models/Booking.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE BOOKING
router.post("/", protect, async (req, res) => {
  try {
    const booking = await Booking.create({
      userId: req.user._id,
      ...req.body,
      status: "active"
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// GET MY BOOKINGS
router.get("/my", protect, async (req, res) => {
  const bookings = await Booking.find({
    userId: req.user._id
  }).sort({ createdAt: -1 });

  res.json(bookings);
});

// CANCEL BOOKING
router.delete("/:id", protect, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }

    booking.status = "cancelled";
    await booking.save();

    res.json({ msg: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
