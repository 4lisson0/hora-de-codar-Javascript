function inicio() {
  var base;
  var altura;

  base = parseFloat(prompt("Qual a base? "));
  altura = parseFloat(prompt("Qual a altura? "));

  var triangulo = (base * altura) / 2;

  alert("A area do trinagulo é: ", triangulo);
}

inicio();