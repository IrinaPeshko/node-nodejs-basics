import { promises as fs } from "fs";
import path from "path";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const errorMessage = "FS operation failed";
  const fileToRead = path.join(__dirname, "files", "fileToRead.txt");
  try {
    const fileData = await fs.readFile(fileToRead, "utf8");
    console.log(fileData);
  } catch {
    throw new Error(errorMessage);
  }
};

await read();
