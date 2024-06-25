import mongoose, { Schema } from "mongoose";
import Review from "./review.js"
const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review", default: [] }],
  password: { type: String, require: true },
});


export default mongoose.model.user || mongoose.model("user", userSchema)