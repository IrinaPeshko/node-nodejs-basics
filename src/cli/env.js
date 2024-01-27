const parseEnv = () => {
  const envResult = [];
  const filteredArr = Object.keys(process.env).filter((el) =>
    el.startsWith("RSS_")
  );
  filteredArr.map((el) => {
    envResult.push(`${el}=${process.env[el]}`);
  });
  console.log(filteredArr.join["; "]);
};

parseEnv();
