import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import ConnectDB from "./src/lib/db.js";
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import { app, server} from "./src/lib/socket.js";  // Ensure app is correctly exported

dotenv.config();

// Fix __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


// Sample route for testing
app.get("/api/auth/check", (req, res) => {
  res.json({ success: true, message: "Auth check successful" });
});

// ✅ FIXED: Added missing `/`
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  ConnectDB();
});


