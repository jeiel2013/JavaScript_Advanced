// defineProperty -> Getter e Setters

function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // como "true", mostra a chave
        value: estoque, // valor
        writable: false, // controla se pode ou não alterar o valor
        configurable: false // controla se pode ser configurável e como "false" não permite apagá-la
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: estoque, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: estoque, 
            writable: true, 
            configurable: true
        }
    });
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
// console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
};