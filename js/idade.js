function idade(num) {

    if (num < 6) {
        return "Bebê";
    }else if(num >=6 && num <14){
        return "Criança";
    }else if(num >=14 && num <18){
        return "Adolescente";
    }else if(num >=18 && num <60){
        return "Adulto"
    }else if(num >=60 && num <80){
        return "Idoso"
    }else{
        return "Ancião";
    }
}
console.log(idade(90))