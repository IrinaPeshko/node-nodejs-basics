import { promises as fs } from "fs";
import path from "path";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const errorMessage = "FS operation failed";

  const wrongFile = path.join(__dirname, "files", "wrongFilename.txt");
  const correctFile = path.join(__dirname, "files", "properFilename.md");
  const isWrongFile = await isFileCreated(wrongFile);
  const isCorrectFile = await isFileCreated(correctFile);
  if (!isWrongFile || isCorrectFile) {
    throw new Error(errorMessage);
  }
  try {
    await fs.rename(wrongFile, correctFile);
  } catch {
    throw new Error(errorMessage);
  }
};

await rename();

async function isFileCreated(url) {
  return fs
    .access(url)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
