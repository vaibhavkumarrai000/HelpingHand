require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  console.error("MONGO_URI is missing in .env file.");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rating: { type: Number, required: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", reviewSchema);

app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.post("/api/reviews", async (req, res) => {
  try {
    const { name, rating, message } = req.body;

    if (!name || rating === undefined || !message) {
      return res.status(400).json({ error: "name, rating, and message are required" });
    }

    const newReview = new Review({ name, rating, message });
    const savedReview = await newReview.save();

    return res.status(201).json(savedReview);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create review" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
