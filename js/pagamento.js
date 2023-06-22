let pagamento = "2x";
/*
if(pagamento === "debito"){
    console.log("Recebeu 10% de desconto");
}else if(pagamento === "pix" || pagamento === "dinheiro")
{
    console.log("Recebeu 15% de desconto");
}else if(pagamento === "2x")
{
    console.log("Valor normal sem juros");
}else{
    console.log("Juros de 10%");
}
*/

switch (pagamento) {
    case "debito":
        console.log("Recebeu 10% de desconto");
        break;
    case "pix":
        console.log("Recebeu 15% de desconto");
        break;
    case "dinheiro":
        console.log("Recebeu 15% de desconto");
        break;
    case "2x":
        console.log("Valor normal sem juros");
        break;
    default:
        console.log("Juros de 10%");
        break;
}