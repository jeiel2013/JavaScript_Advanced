let value = 1234.59

console.log(value.toFixed(1));
console.log(Math.ceil(value)); // arredonda para cima
console.log(Math.floor(value)); // arredonda para baixo
console.log(Math.round(value)); // parecido com o floor
console.log(
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency : "BRL",
    }).format(value)
)