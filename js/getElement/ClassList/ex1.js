let jan = document.getElementById("janela");
let botaovermelho = document.getElementById("botaovermelho");
let botaovede = document.getElementById("botaovede");
let botaoamarelo = document.getElementById("botaoamarelo");
let botaolaranja = document.getElementById("botaolaranja");

botaovermelho.addEventListener('click', function(){
    let jan = document.getElementById("janela");

    jan.classList.toggle("vermelho");
})

botaoverde.addEventListener('click', function(){
    let jan = document.getElementById("janela");

    jan.classList.toggle("verde");
})

botaoamarelo.addEventListener('click', function(){
    let jan = document.getElementById("janela");

    jan.classList.toggle("amarelo");
})

botaolaranja.addEventListener('click', function(){
    let jan = document.getElementById("janela");

    jan.classList.toggle("laranja");
})