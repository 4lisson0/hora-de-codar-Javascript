function inicio() {
  //2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

  var numero;

  alert("Bem-vindo ao descubra se o numero é positivo, negativo e zero\n ");

  numero = parseInt(prompt("Escreva o numero: "));

  if (numero > 0) {
    alert("Seu numero é positivo");
  } else if (numero < 0) {
    alert("Seu numero é negativo");
  } else {
    alert("Seu numero é zero");
  }
}
inicio();
