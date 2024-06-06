// Classe Pai
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta(11, 22, 100);
// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(121);
// conta1.sacar(1);

function CC(agencia, conta, saldo, limite) { // conta corrente
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo) { // conta poupança
    Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc1 = new CC(11, 22, 0, 100);
cc1.depositar(10);
cc1.sacar(110);
cc1.sacar(1);

const cp1 = new CP(12, 33, 0);
cp1.depositar(10);
cp1.sacar(110);
cp1.sacar(1);