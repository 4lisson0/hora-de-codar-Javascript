function inicio() {
  // 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

  var num1;
  var num2;
  var num3;

  alert("Bem-vindo ao descubra qual é o maior numero\n");

  num1 = parseInt(prompt("Escreva primeiro numero: "));
  num2 = parseInt(prompt("Escreva segundo numero: ")); // Corrected from 'parent' to 'parseInt'
  num3 = parseInt(prompt("Escreva terceiro numero: "));

  if (num1 > num2 && num1 > num3) {
    alert("Primeiro numero é maior");
  } else if (num2 > num1 && num2 > num3) {
    alert("Segundo numero é maior");
  } else if (num3 > num2 && num3 > num1) {
    alert("Terceiro numero é maior");
  }
}

inicio();