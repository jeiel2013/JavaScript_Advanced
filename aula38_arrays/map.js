// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 1, 15, 22, 27];
const nDobrados = numeros.map(valor => valor * 2);
// console.log(nDobrados)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Jeiel', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(valor => valor.nome);
// console.log(nomes)

const idades = pessoas.map(obj => ({ idade: obj.idade }));
// console.log(idades);

const id = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
})
console.log(pessoas);