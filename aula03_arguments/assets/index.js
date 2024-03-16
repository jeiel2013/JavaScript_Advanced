function sum() {
    let res = 0;

    // arguments
    // console.log(arguments)
    for (const n of arguments) {
        res += n;
    }

    return res;
}

console.log(sum(1, 1, 3, 10, 4, 1, 3, 4));