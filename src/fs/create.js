import * as fs from "node:fs";
import url from "node:url";
import path from "path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  const fileMessage = "I am fresh and young";
  const errorMessage = "FS operation failed";
  
  fs.writeFile(
    path.join(__dirname, "files", "fresh.txt"),
    fileMessage,
    {
      flag: "wx",
    },
    (err) => {
      if (err) {
        throw new Error(errorMessage);
      }
    }
  );
};

await create();
