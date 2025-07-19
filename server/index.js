const dotenv = require("dotenv");
dotenv.config(); // Load .env variables

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // MongoDB connection
const authRoutes = require("./routes/auth"); // ✅ Correct path
const app = express(); // ✅ Define app BEFORE using it
const protectedRoutes = require("./routes/protected");


connectDB(); // Connect to MongoDB

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes); // ✅ AFTER app is defined
app.use("/api", protectedRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/api/test", (req, res) => {
  res.json({ message: "Test route working!" });
});
