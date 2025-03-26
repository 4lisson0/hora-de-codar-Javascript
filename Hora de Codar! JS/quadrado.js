function inicio() {
  var lado;
  var quadrado;

  lado = parseFloat(
    prompt("Qual tamanho do lado (digite um numero a cima de 0) ?")
  );

  quadrado = lado * lado;

  alert(" A area do quadrado é: ", quadrado);
}

inicio();
