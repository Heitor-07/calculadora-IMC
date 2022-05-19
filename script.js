
function calcula(){
    var nome = document.querySelector("#nome");
    var altura = document.querySelector("#altura");
    var peso = document.querySelector("#peso");

    if(nome.value.length > 0 & altura.value.length > 0 & peso.value.length > 0){
        var imc = peso.value / (altura.value * altura.value)
        var categoria;
        if(imc < 14.5){
            categoria = "Desnutrido";
        } else if( imc < 20){
            categoria = "Peso abaixo do normal";
        } else if(imc < 24.90){
            categoria = "Peso normal";
        } else if(imc < 29.9){
            categoria = "Sobrepeso";
        } else if(imc < 39.9){
            categoria = "Obesidade";
        } else if(imc > 40){
            categoria = "Obesidade mórbida";
        }
        var resultado = nome.value + ", seu IMC é de " + imc.toFixed(1) + ". Você está com " + categoria + "."
        document.getElementById("caixa-resultado").innerHTML = resultado
    } else
        document.getElementById("caixa-resultado").innerHTML = "Preencha todos os campos";

    
    
}
