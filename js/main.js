

function redirecionar(){
    window.open("https://globallab.org/en/#.YE_5m9xv_IU");
    //window.location.href = "https://globallab.org/en/#.YE_5m9xv_IU";
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!<?b>";
    //document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar!");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Pagina Carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma(n1,n2){
    return n1 + n2;
}
*/
/*var validar = 0;

function validaIdade(idade){
     //var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false
    }      
    return validar; 
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
//console.log(validaIdade(idade));
*/

//alert(soma(5,10));

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("vai japão", "japão", "Brasil"));
alert(soma(5,10));
*/
/*var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());
*/

/*var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count=0;
while(count<=5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*var idade = prompt("Qual sua Idade?");
//var idade=18

if (idade >= 18){
    alert("Maior de idade.");
}
else{
    alert("Menor de idade.");
};
*/

/*var frutas = [{nome:"Maçã", cor: "Vermelha"},{nome:"Uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].cor);
*/

/*var fruta = {nome:"Maçã", cor: "Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var nome = "Wemerson Tavares";
//var idade = 29;
//var frase = "João aprende tudo rápido."
//alert( nome + " tem " + idade);
//var n1 = 10;
//var n2 = 15;

//console.log(frase.replace("João", "Wemerson"))
//alert(frase.replace("João", "Wemerson   "))
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toLocaleLowerCase());
//console.log(frase.toUpperCase());
//var lista = ["Maçã","Pêra","Laranja"];
//lista.push("Uva");
//lista.pop();

//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join("|"))
