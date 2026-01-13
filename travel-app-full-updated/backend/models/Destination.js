import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: String,
    country: String,
    image: String,
    price: Number,
    days: Number,
    rating: Number,
    category: {
      type: String,
      enum: ["popular", "beach", "mountain", "city"]
    }
  },
  { timestamps: true }
);

export default mongoose.model("Destination", destinationSchema);
