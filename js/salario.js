function imposto(salario){
    let aliquota;

    if(salario <=1100){
        return aliquota = 0.05;
    }else if(salario >1100 && salario <=2500){
        return aliquota = 0.1;
    }else{
        return aliquota = 0.15;
    }
}

const valorSalario = 2000;
const valorBeneficio = 250;
const valorImposto = imposto(valorSalario) * valorSalario;

console.log(valorImposto);


const valorFinal = valorSalario - valorImposto + valorBeneficio;
console.log(valorFinal);