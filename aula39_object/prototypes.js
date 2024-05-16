// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome - sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Jeiel', 'J.'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);