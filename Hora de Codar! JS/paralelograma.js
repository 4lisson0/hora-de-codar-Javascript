function inicio() {
  var base;
  var altura;
  var paralelograma;

  base = parseFloat(prompt("Qual a base ? "));
  altura = parseFloat(prompt("Qual a altura? "));

  paralelograma = base * altura;

  alert("A area do paralelograma é: ", paralelograma);
}

inicio();
