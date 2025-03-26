function inicio() {
  //11. Uma micro calculadora
  //Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
  //O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos.

  alert("Bem-vindo a micro calculadora \n");

  var forma, valor_1, valor_2;
  var calculo = 0;

  forma = parseInt(
    prompt(
      "Digite sua operação: \n 1 - Adição \n 2 - Subtração \n 3 - Divisão \n 4 - Multiplicação \n"
    )
  );

  valor_1 = parseInt(
    prompt(
      "Agora quero saber qual é o primeiro valor escolhido. Digite o valor abaixo: \n"
    )
  );
  valor_2 = parseInt(
    prompt(
      "Agora quero saber qual é o segundo valor escolhido. Digite o valor abaixo: \n"
    )
  );

  if (forma == 1) {
    alert("A operação selecionada foi adição \n");
    calculo = valor_1 + valor_2;
    alert("A soma dos valores digitados foram: ", calculo);
  } else if (forma == 2) {
    alert("A operação selecionada foi subtração \n");
    calculo = valor_1 - valor_2;
    alert("A subtração dos valores digitados foram: ", calculo);
  } else if (forma == 3) {
    alert("A operação selecionada foi divisão \n");
    calculo = valor_1 / valor_2;
    alert("A divisão dos valores digitados foram: ", calculo);
  } else if (forma == 4) {
    alert("A operação selecionada foi multiplicação \n");
    calculo = valor_1 * valor_2;
    alert("A multiplicação dos valores digitados foram: ", calculo);
  }
}
inicio();
