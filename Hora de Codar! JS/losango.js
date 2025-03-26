function inicio() {
  var diagonal_maior;
  var diagonal_menor;
  var losango;

  diagonal_maior = parseFloat(prompt("qual a diagonal maior ?"));
  diagonal_menor = parseFloat(prompt("Qual a diagonal menor"));

  losango = (diagonal_maior * diagonal_menor) / 2;

  escreva("A area do losango é: ", losango);
}

inicio();
