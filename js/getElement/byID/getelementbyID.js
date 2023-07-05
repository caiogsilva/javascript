let titulo = document.getElementById("title");

titulo.innerHTML = "Olá Mundo novamente"

let botao = document.getElementById("botao");

/*function clicar(){
    alert("O botão foi clicado");
}*/

function clicar(mensagem){

    alert(mensagem);
}

document.getElementById("botao").value = "Não clique aqui"