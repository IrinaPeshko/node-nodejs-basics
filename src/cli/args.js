const parseArgs = () => {
    const result = []
    const args = process.argv;
    args.map((el, i, arr) => {
        if (el.startsWith('--')){
            result.push(`${el.slice(2)} is ${arr[i+1]}`)
        }
    })
    console.log(result.join(', '));
};

parseArgs();