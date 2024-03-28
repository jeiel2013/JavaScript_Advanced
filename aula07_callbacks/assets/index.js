function mult(values, func) {
    for (let i = 0; i < values.length; i++) {
        // values[i] *= values[i];
        values[i] = func(values[i]);
    }
    return values;
}

const values = [1, 2, 3, 4, 10];
const func = (n) => n * n;

// callbacks: map, filter, reduce

console.log(mult(values, func));