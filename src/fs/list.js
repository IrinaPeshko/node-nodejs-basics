import { promises as fs } from "fs";
import path from "path";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  const currentDir = path.join(__dirname, "files");
  const errorMessage = "FS operation failed";
  try {
    const baseFiles = await fs.readdir(currentDir, "utf8");
    console.log(baseFiles);
  } catch {
    throw new Error(errorMessage);
  }
};

await list();
