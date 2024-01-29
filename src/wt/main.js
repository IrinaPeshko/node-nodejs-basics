import { Worker } from "worker_threads";
import { cpus } from "os";
import path from "path";
import url from "node:url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const startWithNumber = 10;

const createWorkerThread = (coreNum) =>
  new Promise((resolve) => {
    const workerPath = path.join(__dirname, "worker.js");
    const worker = new Worker(workerPath, { workerData: coreNum });

    worker.on("message", (data) =>
      resolve({
        status: "resolved",
        data,
      })
    );

    worker.on("error", (data) =>
      resolve({
        status: "error",
        data: null,
      })
    );
  });

const performCalculations = async () => {
  const cores = cpus().length;
  const workersData = Array.from(
    { length: cores },
    (_, i) => startWithNumber + i
  );
  const result = await Promise.all(
    workersData.map((data) => createWorkerThread(data))
  );
  console.log(result);
};

await performCalculations();
