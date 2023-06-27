function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(20, 30));
console.log(soma(15, 55));

function saudacao(){
    return "Boa Noite Pessoal";
}
console.log(saudacao());

function saud(nome3){
    return `Boa Noite ${nome3}`;

}
console.log(saud("Maria"));



const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(81));


const raiz1 = (n) => {
    return n ** 0.5;
}
console.log(raiz1(169));
console.log(raiz1(22500));


const raiz2 = n => n ** 0.5;
console.log(raiz2(1600));
console.log(raiz2(196));