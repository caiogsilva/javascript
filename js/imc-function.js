/*let peso = 53;
let altura = 1.62;

imc = peso / (altura * altura);
*/
/*
//IMC sem tabela de peso//
function imc(peso, altura){
    const resultado = peso / (altura * altura);
    return resultado;
}
console.log(imc(53, 1.62) .toFixed(2));
console.log(imc(75, 1.80) .toFixed(2));
console.log(imc(125, 1.75) .toFixed(2));
console.log(imc(80, 2.03) .toFixed(2));
*/

//IMC com tabela de peso//
function imc(peso, altura){
    let resultado = peso / (altura * altura);

    if (resultado <= 18.5){
        return "Abaixo do Peso";
    }else if (resultado >=18.5 && resultado <25)
    {
        return "Peso Normal";
    }else if (resultado >=25 && resultado <30)
    {
        return "Acima do Peso";
    }else if (resultado >=30 && resultado <35)
    {
        return "Obeso";
    }else {
        return "Obesidade Extrema";
    }
}
console.log(imc(40, 1.62));
console.log(imc(75, 1.80));
console.log(imc(100, 1.90));
console.log(imc(125, 1.75));