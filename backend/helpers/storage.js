const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const UPLOAD_DIR = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

async function saveBufferAsImage(buffer, originalName) {
  const ext = path.extname(originalName) || ".jpg";
  const filename = `${Date.now()}-${uuidv4()}${ext}`;
  const filepath = path.join(UPLOAD_DIR, filename);
  await fs.promises.writeFile(filepath, buffer);
  return { filename, filepath };
}

module.exports = { saveBufferAsImage };
