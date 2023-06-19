let nota1 = 60;
let nota2 = 70;
let nota3 = 100;
let nota4 = 50;

let media = (nota1+nota2+nota3+nota4)/4;

if(media < 40){
    console.log("O Aluno foi REPROVADO");
}else if(media >=40 && media <=60)
{
    console.log("O Aluno está em RECUPERAÇÃO");
}else{
    console.log("O Aluno foi APROVADO");
}