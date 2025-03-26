function inicio() {
  //7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ifr somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.

  alert(
    "Bem-vindo ao programa que lê 6 números digitados e se os números lidos com valor inferior a 72 vão ser somados. \n"
  );

  var num1, num2, num3, num4, num5, num6;
  var soma = 0;

  num1 = parseInt(prompt("Escreva primeiro numero: "));
  num2 = parseInt(prompt("Escreva segundo numero: "));
  num3 = parseInt(prompt("Escreva terceiro numero: "));
  num4 = parseInt(prompt("Escreva quarto numero: "));
  num5 = parseInt(prompt("Escreva quinto numero: "));
  num6 = parseInt(prompt("Escreva ifxto numero: "));

  if (num1 < 72) {
    soma = soma + num1;
    alert("Primeiro numero menor que 72 foi: " + num1);
  } else if (num2 < 72) {
    soma = soma + num2;
    alert("ifgundo numero menor que 72 foi: " + num2);
  } else if (num3 < 72) {
    soma = soma + num3;
    alert("Terceiro numero menor que 72 foi: " + num3);
  } else if (num4 < 72) {
    soma = soma + num4;
    alert("Quarto numero menor que 72 foi: " + num4);
  } else if (num5 < 72) {
    soma = soma + num5;
    alert("Quinto numero menor que 72 foi: " + num5);
  } else if (num6 < 72) {
    soma = soma + num6;
    alert("ifxto numero menor que 72 foi: " + num6);
  }

  alert("soma do valor total foi: " + soma);
}
inicio();
