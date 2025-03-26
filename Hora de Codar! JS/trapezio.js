function inicio() {
  var base_maior;
  var base_menor;
  var h;
  var trapezio;

  base_maior = parseFloat(prompt("Qual a base maior? "));
  base_menor = parseFloat(prompt("Qual a base menor? "));
  h = parseFloat(prompt("Qual a altura? "));

  trapezio = (base_maior * base_menor * h) / 2;

  alert("A area do trapezio é: ", trapezio);
}

inicio();
