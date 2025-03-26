function inicio() {
  //4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

  var num1;
  var num2;
  var num3;
  var soma;

  alert("Bem-vindo ao descubra qual é o maior numero\n");

  num1 = parseInt(prompt("Escreva primeiro numero: "));
  num2 = parseInt(prompt("Escreva segundo numero: "));
  num3 = parseInt(prompt("Escreva terceiro numero: "));

  if (num1 < num2 && num1 < num3) {
    soma = num2 + num3;
    alert("Soma dos numeros é: " + soma);
  } else if (num2 < num1 && num2 < num3) {
    soma = num1 + num3
    alert("Soma dos numeros é: " + soma);
  } else if (num3 < num2 && num3 < num1) {
    soma = num1 + num2;
    alert("Soma dos numeros é: " + soma);
  }
}
inicio();
