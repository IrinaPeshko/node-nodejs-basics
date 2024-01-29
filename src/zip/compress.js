import { createGzip } from "node:zlib";
import fs from "fs";
import path from "path";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
  const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destinationPath = path.join(__dirname, "files", "archive.gz");
  const gzip = createGzip();
  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(destinationPath);

  sourceStream.pipe(gzip).pipe(destinationStream);
};

await compress();
