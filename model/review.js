import mongoose, { Schema } from "mongoose";
import User from "./user.js";

const reviewSchema = new Schema({
  text: { type: String, default: "" },
  rating: { type: Number, require: true, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model.review || mongoose.model("review", reviewSchema);
