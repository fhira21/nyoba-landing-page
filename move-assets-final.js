import fs from 'fs';
import path from 'path';

const srcDir = "./src/assets";
const destDir = "./public/images";

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const srcHero = path.join(srcDir, "hero-sneaker.png");
const srcBA = path.join(srcDir, "before-after.png");

const destHero = path.join(destDir, "hero.png");
const destBA = path.join(destDir, "before-after.png");

try {
  if (fs.existsSync(srcHero)) {
    fs.copyFileSync(srcHero, destHero);
    console.log("Copied hero-sneaker.png to public/images/hero.png");
    fs.unlinkSync(srcHero);
  } else {
    console.log("Source hero-sneaker.png not found.");
  }

  if (fs.existsSync(srcBA)) {
    fs.copyFileSync(srcBA, destBA);
    console.log("Copied before-after.png to public/images/before-after.png");
    fs.unlinkSync(srcBA);
  } else {
    console.log("Source before-after.png not found.");
  }

  if (fs.existsSync(srcDir) && fs.readdirSync(srcDir).length === 0) {
    fs.rmdirSync(srcDir);
    console.log("Cleaned up empty src/assets directory.");
  }
} catch (err) {
  console.error("Error moving assets:", err.message);
}
