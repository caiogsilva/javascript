const btn = document.getElementById("btn-resultado");

btn.addEventListener("click", function calculoimc() {
    let peso = Number(document.getElementById("input-peso").value);
    let altura = Number(document.getElementById("input-altura").value);

    let imc = document.getElementById("resultado");
    imc.textContent = peso / (altura * altura);
})