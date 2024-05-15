const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total1 = numeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0)

const total2 = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, [])

const total3 = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2)
    return acumulador;
}, [])
// console.log(total1, total2, total3)


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Jeiel', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 77 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function(ac, val) {
    if (ac.idade > val.idade) return ac;
    return val;
});
console.log(maisVelha);