import { promises as fs } from "fs";
import path from "path";
import url from "node:url";
import { createHash } from "crypto";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const fileToHash = path.join(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const stringToHash = await fs.readFile(fileToHash, "utf8");
  const hash = createHash("sha256").update(stringToHash).digest("hex");
  console.log(hash);
};

await calculateHash();
