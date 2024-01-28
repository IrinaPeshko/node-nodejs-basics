import { Transform } from "stream";

const transform = async () => {
  const input = process.stdin;
  const output = process.stdout;
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const reversedData = chunk.toString().trim().split("").reverse().join("");
      callback(null, reversedData + "\n");
    },
  });
  input.pipe(transformStream).pipe(output);
};

await transform();
