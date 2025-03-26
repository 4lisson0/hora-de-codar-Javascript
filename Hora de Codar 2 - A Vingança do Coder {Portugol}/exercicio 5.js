function inicio() {
  //5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

  var num1, num2, num3, num4, num5, num6, soma, media;

  alert("Bem-vindo ao descubra qual é a média aritmética\n");

  num1 = parseInt(prompt("Escreva primeiro numero: "));
  num2 = parseInt(prompt("Escreva segundo numero: "));
  num3 = parseInt(prompt("Escreva terceiro numero: "));
  num4 = parseInt(prompt("Escreva quarto numero: "));
  num5 = parseInt(prompt("Escreva quinto numero: "));
  num6 = parseInt(prompt("Escreva sexto numero: "));

  soma = num1 + num2 + num3 + num4 + num5 + num6;
  media = soma / 6;

  alert("A média aritmética é: " + media);
}
inicio();
