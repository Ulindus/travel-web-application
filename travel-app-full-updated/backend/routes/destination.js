import express from "express";
import Destination from "../models/Destination.js";

const router = express.Router();

// Get all destinations by category
router.get("/category/:type", async (req, res) => {
  try {
    const destinations = await Destination.find({
      category: req.params.type
    });
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
