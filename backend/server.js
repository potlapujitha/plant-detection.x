const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { analyzeImage } = require("./model");
const { saveBufferAsImage } = require("./helpers/storage");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

const upload = multer({ storage: multer.memoryStorage() });

// ---- LOGIN ENDPOINT ----
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "1234") {
    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// ---- DETECT PLANT ENDPOINT ----
app.post("/api/detect", upload.single("image"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No image uploaded" });
  const saved = await saveBufferAsImage(req.file.buffer, req.file.originalname);
  const result = await analyzeImage(req.file.buffer, saved.filepath);
  res.json(result);
});

// ---- HEALTH ----
app.get("/api/health", (req, res) => res.json({ status: "OK" }));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
