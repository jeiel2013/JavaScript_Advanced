// VALOR
function mult(n) {
    // let res = n;
    n *= n;
    return n;
}

let numVal = 10;
console.log(mult(n));

// ------------------------------

// REFERÊNCIA
function multObj(obj) {
    obj.value *= obj.value;
    return obj;
}

const numObj = { value: 10 }; // passa a ter o value da function (100)
console.log(multObj(numObj));