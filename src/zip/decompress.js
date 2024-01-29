import { createGunzip } from "node:zlib";
import fs from "fs";
import path from "path";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
  const sourcePath = path.join(__dirname, "files", "archive.gz");
  const destinationPath = path.join(__dirname, "files", "fileToCompress.txt");
  const gzip = createGunzip();
  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(destinationPath);

  sourceStream.pipe(gzip).pipe(destinationStream);
};

await decompress();
