function inicio() {
  //5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

  var num1, num2, num3, num4, soma, media;

  alert("Bem-vindo ao descubra qual é a média aritmética\n");

  num1 = parseInt(prompt("Escreva primeiro numero: "));
  num2 = parseInt(prompt("Escreva segundo numero: "));
  num3 = parseInt(prompt("Escreva terceiro numero: "));
  num4 = parseInt(prompt("Escreva quarto numero: "));

  alert("O primeiro numero foi: " + num1);
  alert("O último valor foi: " + num4);

  if (num1 > num2 && num1 > num3 && num1 > num4) {
    escreva("o maior valor infomado foi: ", num1);
  } else if (num2 > num1 && num2 > num3 && num2 > num4) {
    escreva("o maior valor infomado foi: ", num2);
  } else if (num3 > num1 && num3 > num2 && num3 > num4) {
    escreva("o maior valor infomado foi: ", num3);
  } else if (num4 > num1 && num4 > num2 && num4 > num3) {
    escreva("o maior valor infomado foi: ", num4);
  }

  soma = num1 + num2 + num3 + num4;
  media = soma / 4;

  alert("A média aritmética é: " + media);
}
inicio();
