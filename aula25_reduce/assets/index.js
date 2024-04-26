let values = [1.5, 2, 4, 10];

function callback(acumulator, currentValue, index, array) {
    console.log(`acumulator`, acumulator);
    console.log(`currentValue`, currentValue);
    console.log(`index`, index);
    console.log(`array`, array);
    console.log("---")

    return acumulator + 1;
}

values.reduce(callback);