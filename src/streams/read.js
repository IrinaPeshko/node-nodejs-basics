import path from "path";
import url from "node:url";
import { createReadStream } from "fs";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const readableFilePath = path.join(__dirname, "files", "fileToRead.txt");
  const readStream = createReadStream(readableFilePath);
  readStream.pipe(process.stdout);
};

await read();
