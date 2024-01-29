import { fork } from "node:child_process";
import path from "path";
import url from "node:url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const spawnChildProcess = async (args) => {
  const childProcessPath = path.join(__dirname, "files", "script.js");
  fork(childProcessPath, args);
};

spawnChildProcess(["someArgument1", "someArgument2", 1, 2]);
