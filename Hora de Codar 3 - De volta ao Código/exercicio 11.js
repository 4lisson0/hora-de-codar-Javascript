//11 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

function inicio() {
  var numTabuada, x, y;

  x = parseInt(prompt("Digite o valor de N: "));

  for (x = 1; x <= numTabuada; x++) {
    alert("\nTabuada do " + x + ":\n");

    for (y = 1; y <= 10; y++) {
      alert(x + " * " + y + " = " + x * y + "\n");
    }
  }
}
inicio();
