// Dummy AI model for plant detection
async function analyzeImage(buffer, filepath) {
  // Simulate AI check (replace with real model later)
  const isPlant = Math.random() > 0.5;
  if (isPlant) {
    return {
      isPlant: true,
      name: "Leafy Green Plant",
      confidence: 0.95,
      message: "This looks like a healthy plant!"
    };
  } else {
    return {
      isPlant: false,
      confidence: 0.80,
      message: "This doesn’t look like a plant."
    };
  }
}

module.exports = { analyzeImage };
