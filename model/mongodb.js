import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function mongodb() {
  const mongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_KEY}@cluster0.duvmrrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  mongoose
    .connect(mongoURL, { useNewUrlPerser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error to Connecting MongoDb ", err));
}

export default mongodb;
