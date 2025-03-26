function inicio() {
  //1. Escreva um programa em que o usuário informe dois números. Então escreva em tela o maior deles.

  var num1;
  var num2;

  alert("Bem-vindo ao descubra qual é o maior numero\n");

  num1 = parseInt(prompt("Digite o primeiro numero: "));
  num2 = parseInt(prompt("Digite o segundo numero: "));

  if (num1 > num2) {
    alert("Primeiro numero é o maior");
  } else if (num1 < num2) {
    alert("Segundo numero é maior");
  } else {
    alert("Os numeros são iguais");
  }
}
inicio();
