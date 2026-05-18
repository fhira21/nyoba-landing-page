import fs from 'fs';
import path from 'path';

const srcHero = "/Users/fhir253/.gemini/antigravity/brain/5165483d-6b69-45fd-9570-77788ea30ee2/hero_sneaker_1779089244736.png";
const srcBA = "/Users/fhir253/.gemini/antigravity/brain/5165483d-6b69-45fd-9570-77788ea30ee2/before_after_sneaker_1779089717153.png";

const destDir = "./src/assets";
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  if (fs.existsSync(srcHero)) {
    fs.copyFileSync(srcHero, path.join(destDir, "hero-sneaker.png"));
    console.log("Hero asset copied successfully!");
  } else {
    console.log("Hero asset source file not found at " + srcHero);
  }
  
  if (fs.existsSync(srcBA)) {
    fs.copyFileSync(srcBA, path.join(destDir, "before-after.png"));
    console.log("Before & After asset copied successfully!");
  } else {
    console.log("Before & After asset source file not found at " + srcBA);
  }
} catch (err) {
  console.error("Failed to copy assets:", err.message);
}
