import { promises as fs } from "fs";
import path from "path";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const errorMessage = "FS operation failed";
const copyDir = path.join(__dirname, "files_copy");
const baseDir = path.join(__dirname, "files");

const copy = async () => {
  const isBaseDir = await isFolderCreated(baseDir);
  const isCopyDir = await isFolderCreated(copyDir);

  if (!isBaseDir || isCopyDir) {
    throw new Error(errorMessage);
  } else if (!isCopyDir) {
    try {
      fs.mkdir(copyDir);
    } catch {
      throw new Error(errorMessage);
    }
  }

  copyFiles(baseDir, copyDir);
};

await copy();

async function isFolderCreated(url) {
  return fs
    .access(url)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function copyFiles(baseDir, copyDir) {
  const baseFiles = await fs.readdir(baseDir, "utf8");

  baseFiles.map(async (el) => {
    const elUrl = path.join(baseDir, el);

    const stats = await fs.stat(elUrl);
    if (stats.isDirectory()) {
      const innerDir = path.join(copyDir, el)
      try {
        fs.mkdir(innerDir);
      } catch {
        throw new Error(errorMessage);
      }
      return copyFiles(elUrl, innerDir);
    }
    try {
      const data = await fs.readFile(elUrl, "utf8");
      fs.writeFile(path.join(copyDir, el), data);
    } catch {
      throw new Error(errorMessage);
    }
  });
}
