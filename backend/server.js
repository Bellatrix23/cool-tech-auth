// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // Make sure this is importing correctly
const authRoutes = require("./routes/authRoutes");
const credentialRoutes = require("./routes/credentialRoutes");

// Load environment variables
dotenv.config();

// Call the connectDB function to connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/credentials", credentialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
