console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista
console.log("Destinos possíveis: ");
listaDeDestinos.splice(3, 1) //removendo um item na lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); 


