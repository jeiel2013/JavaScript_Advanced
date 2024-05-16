// defineProperty -> Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    let estoquePrivado = estoque;
        Object.defineProperty(this, 'estoque', {
        enumerable: true, // como "true", mostra a chave
        configurable: true, // controla se pode ser configurável e como "false" não permite apagá-la
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;
        }
    });
};
// const p1 = new Produto('Camiseta', 20, 3);
// // console.log(p1);
// p1.estoque = 'O valor que eu quero';
// console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor
        }
    };
}

const p2 = criaProduto('Camiseta');
console.log(p2.nome);