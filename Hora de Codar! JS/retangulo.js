function inicio() {
  var base;
  var altura;

  base = parseFloat(prompt("Qual o numero da base? "));
  altura = parseFloat(prompt("Qual o numero da altura? "));

  var retangulo = base * altura;

  alert("A area do retangulo é:", retangulo);
}

inicio();
