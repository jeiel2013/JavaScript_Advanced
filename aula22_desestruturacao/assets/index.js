let set = [1, 2, 3, 4, 5];

let [n1, n2] = set; // 1, 2
console.log("n1", n1);
console.log("n2", n2);

function myFunction() {
    const x = 10;
    const y = 400;

    return [x,y];
}

// const myArray = myFunction(); // errado
// console.log(myArray[0]);
// console.log(myArray[1]);

const [x, y] = myFunction(); // certo
console.log("x", x);
console.log("y", y);