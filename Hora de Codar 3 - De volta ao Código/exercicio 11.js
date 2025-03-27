// 11 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

function inicio() {
  var numTabuada, x, y;

  numTabuada = parseInt(prompt("Digite o valor de N: "));

  if (numTabuada <= 0) {
    document.write("<p>Por favor, insira um número válido maior que 0.</p>");
    return;
  }

  document.write("<h1>Tabuadas de 1 até " + numTabuada + "</h1>");
  for (x = 1; x <= numTabuada; x++) {
    document.write("<h2>Tabuada do " + x + ":</h2>");
    for (y = 1; y <= 10; y++) {
      document.write("<p>" + x + " x " + y + " = " + (x * y) + "</p>");
    }
  }
}