/*const frutas = ["Abacaxi", "Mamão", 10, 15, true, false, 1.5];

console.log(frutas[0]);



const frutas = ["mamão", "laranja", "melancia", "abacate", "uva", "pera"];

frutas.push("maçã");
console.log(frutas[2]);
console.log(frutas.length);



const pessoa={
    nome: "Carol",
    sobrenome: "Nantes",
    idade: 16
}

console.log(pessoa.idade)



const carro1={
    marca: "Porsche",
    modelo: "718 Cayman",
    ano: 2022,
    cor: "Preto"
}

const carro2={
    marca: "Ferrari",
    modelo: "418 Spider",
    ano: 2021,
    cor: "Chumbo"
}

const carro3={
    marca: "Nissan",
    modelo: "GTR",
    ano: 2020,
    cor: "Branco"
}

const carro4={
    marca: "BMW",
    modelo: "320i",
    ano: 2023,
    cor: "Preto"
}

console.log(carro1.modelo)
console.log(carro2.modelo)
console.log(carro3.modelo)
console.log(carro4.modelo)




function carro(marca, modelo, ano){
    return {marca, modelo, ano};
}

const carro1 = carro("Porsche", "718 Cayman", 2022)
const carro2 = carro("Ferrari", "418 Spider", 2021)
const carro3 = carro("Nissan", "GTR", 2020)
const carro4 = carro("BMW", "320i", 2023)

console.log(carro1.marca, carro1.modelo, carro1.ano)
console.log(carro2.marca, carro2.modelo, carro2.ano)
console.log(carro3.marca, carro3.modelo, carro3.ano)
console.log(carro4.marca, carro4.modelo, carro4.ano)
*/


function criapessoa(nome, sobrenome, idade, altura){
    return{nome, sobrenome, idade, altura};
}

const caio = criapessoa("Caio", "Silva", 16, 1.65)
const juan = criapessoa("Juan", "Rodrigues", 16, 1.78)
const carol = criapessoa("Carol", "Nantes", 16, 1.62)

console.log(caio.nome, caio.sobrenome, caio.idade, caio.altura)
console.log(juan.nome, juan.sobrenome, juan.idade, juan.altura)
console.log(carol.nome, carol.sobrenome, carol.idade, carol.altura)