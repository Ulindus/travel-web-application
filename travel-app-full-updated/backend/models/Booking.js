import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    destinationId: Number,
    destinationName: String,
    dateFrom: String,
    dateTo: String,
    guests: Number,
    totalPrice: Number,
    status: {
      type: String,
      default: "active"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
