import path from "path";
import url from "node:url";
import { createWriteStream } from "fs";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
  const writableFilePath = path.join(__dirname, "files", "fileToWrite.txt");
  const writeStream = createWriteStream(writableFilePath);
  process.stdin.pipe(writeStream);
};

await write();
