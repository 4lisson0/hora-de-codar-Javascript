function inicio() {
  var notas = [];
  var soma = 0;
  var media = 0;

  alert("Bem-vindo ao cálculo da média de 6 notas")

  for (var i = 0; i < 6; i++) {
    var nota;
    do {
      nota = parseFloat(prompt(`Digite a nota ${i + 1} (entre 0 e 10):`));
      if (nota < 0 || nota > 10) {
        alert("Nota inválida! Digite um valor entre 0 e 10.");
      }
    } while (nota < 0 || nota > 10);
    notas.push(nota);
    soma += nota;
  }

  media = soma / notas.length;
  alert("Média das notas foi: " + media.toFixed(2));
}
inicio();