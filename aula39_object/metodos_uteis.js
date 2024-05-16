/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Caneca', preco: 1.8 };
Object.freeze(produto);
produto.nome = 'Outro nome';
const outraCoisa = { 
    ...produto, // spread
    material: 'porcelana'
};
const outraCoisa1 = Object.assign({}, produto, { material: 'porcelana' });
outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);
console.log(Object.keys(produto));

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));

console.log(Object.entries(produto));
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}
