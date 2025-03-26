function inicio() {
  //10. Tendo como entrada a altura e o gênero designado ao nascer (codificado da seguinte forma: 1: feminino - 2: masculino - ) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas.

  alert("Bem-vindo ao calcule seu IMC \n");

  var forma, altura;
  var calculo_masculino = 0;
  var calculo_feminino = 0;

  forma = parseInt(
    prompt("Digite sua forma: \n 1 - para masculino \n 2 - para feminino \n")
  );

  if (forma == 1) {
    alert("Sua forma biológica é masculino \n");
  } else if (forma == 2) {
    alert("Sua forma biológica é feminina \n");
  }

  altura = parseInt(prompt("Agora escreva sua altura: \n"));

  if (forma == 1) {
    calculo_masculino = 71.7 * altura - 58;
    alert(
      "Seu peso ideal para não correr risco em questões de doenças trazidas pela obsidade é: " +
        calculo_masculino
    );
  } else if (forma == 2) {
    calculo_feminino = 62.1 * altura - 44.7;
    alert(
      "Seu peso ideal para não correr risco em questões de doenças trazidas pela obsidade é: " +
        calculo_feminino
    );
  }
}
inicio();
