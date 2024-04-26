const numbers = [10, 18, 1, 15];

// let res = [];
// for (const n of numbers) {
//     if (n >= 10) {
//         res.push(n);
//     }
// }
// console.log(n);

// const gt10 = function(item) {
//     return item > 10; // true / false
// }

let res = numbers.filter((item) => item > 10);
console.log(res);

const people = [
    { nome: "Felipe", gender: "M", age: 40 },
    { nome: "Jeiel", gender: "M", age: 17 },
    { nome: "Amanda", gender: "F", age: 13 },
]

const m = people.filter((p) => p.age >= 18);
console.log(m);

const n = people.filter((p) => p.age >= 18 && p.gender === "M");
console.log(n);

const x = people.filter((p) => (p.age >= 18 && p.age <= 25) && p.gender === "M");
console.log(x);