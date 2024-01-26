import { promises as fs } from "fs";
import path from "path";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
const errorMessage = "FS operation failed";

  const fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");
  try {
    await fs.rm(fileToRemove)
  } catch {
    throw new Error(errorMessage);
  }
};

await remove();

