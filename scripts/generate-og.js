// scripts/generate-og.js
import { createCanvas, loadImage } from "canvas";
import { writeFileSync } from "fs";
import path from "path";

const WIDTH = 1200;
const HEIGHT = 630;

// Colors
const bgGradientStart = "#0f172a"; // slate-900
const bgGradientEnd = "#1e293b";   // slate-800
const textColor = "#f8fafc";       // gray-50
const accentColor = "#38bdf8";     // sky-400

// Output path
const outPath = path.resolve("public", "preview.png");

async function generateOG() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, bgGradientStart);
  gradient.addColorStop(1, bgGradientEnd);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Name
  ctx.fillStyle = textColor;
  ctx.font = "bold 72px 'Inter', sans-serif";
  ctx.fillText("Stephen A. Rice", 80, 200);

  // Role
  ctx.font = "48px 'Inter', sans-serif";
  ctx.fillText("Software Engineer", 80, 300);

  // Strengths
  ctx.fillStyle = accentColor;
  ctx.font = "40px 'Inter', sans-serif";
  ctx.fillText("Analytical • Innovative • Principled • Curious", 80, 420);

  // Load and draw logo (favicon {/})
  try {
    const logo = await loadImage("public/favicon.png"); // put your {/} icon here
    const logoSize = 120;
    ctx.drawImage(logo, WIDTH - logoSize - 60, HEIGHT - logoSize - 60, logoSize, logoSize);
  } catch (err) {
    console.warn("⚠️ Logo not found, skipping logo:", err.message);
  }

  // Save PNG
  const buffer = canvas.toBuffer("image/png");
  writeFileSync(outPath, buffer);
  console.log(`✅ OG image generated at ${outPath}`);
}

generateOG();
