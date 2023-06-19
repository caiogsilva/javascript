peso = 53;
altura = 1.65;

let imc = peso / (altura * altura);
console.log(imc);

if(imc < 18.5){
    console.log("Abaixo do Peso");
}else if(imc >=18.5 && imc < 26)
{
    console.log("Peso Normal");
}else if(imc >=26 && imc < 30)
{
    console.log("Acima do Peso");
}else if(imc >=30 && imc < 40)
{
    console.log("Obeso");
}else {
    console.log("Obesidade Extrema");
}