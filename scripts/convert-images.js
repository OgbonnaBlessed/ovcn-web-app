import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "../public");
const outputDir = path.join(__dirname, "../public/optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const convertImage = async (filePath, outputBase) => {
  const image = sharp(filePath);

  await image.avif({ quality: 50 }).toFile(`${outputBase}.avif`);
  await image.webp({ quality: 75 }).toFile(`${outputBase}.webp`);
};

const processFolder = async (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      await processFolder(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputBase = path.join(outputDir, path.parse(file).name);

      await convertImage(fullPath, outputBase);
      console.log(`Converted: ${file}`);
    }
  }
};

processFolder(inputDir);