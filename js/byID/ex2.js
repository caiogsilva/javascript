let titulo = document.getElementById("title");

titulo.innerHTML = "Meu IMC é"

/*
function imc(peso, altura){
    alert (peso / (altura * altura)); 
}
*/

function imc(peso, altura){
    let resultado = document.getElementById('resultado');
    resultado.innerText = (peso / (altura * altura)); 
}