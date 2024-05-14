const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1. elem2, elem3);
//pop
const removidos = nomes.splice(-1, 1);

// shift
const removidos1 = nomes.splice(0, 1);

//push
const metPush = nomes.splice(nomes.length, 0, 'Luiz');

// Unshift
const metUnshift = nomes.splice(0, 0, 'Jeiel', 'Jedson');

console.log(nomes, metUnshift);