let botaoadd = document.getElementById('botaoadd');
let botaorem = document.getElementById('botaorem');
let numero = 0;

botaoadd.addEventListener('click', function contadoradd(){
    let count = document.getElementById("count");
    numero++

    count.innerHTML = numero;
})

botaorem.addEventListener('click', function contadorrem(){
    let count = document.getElementById("count");
    numero--

    count.innerHTML = numero;
})