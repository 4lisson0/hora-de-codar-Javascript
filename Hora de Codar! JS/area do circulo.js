function inicio() {
  var pi;
  var r;
  var area;

  alert("Vamos calcular a área do Círculo");
  pi = parseFloat(prompt("Escreva o valor de Pi: "));
  r = parseFloat(prompt("Escreva o valor do Raio: "));

  area = pi * (r * r);

  alert("Valor da área do Círculo é: " + area);
}

inicio();
