console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1) //removendo um item na lista
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado ");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}




console.log(listaDeDestinos);



