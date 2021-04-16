var n1;
var positivo = 0;
var negativo = 0;
var count ;
for(count=0; count <3; count++){
var n1 = prompt("Digite um valor: ");
if(n1 > 0){
  positivo = positivo + 1;
}
else{
  negativo = negativo + 1;
}
}
alert("A quantidade dos Valores positivos é: ")