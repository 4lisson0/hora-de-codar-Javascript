function inicio() {
  // 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números
  //forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem
  //"Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

  var nota1, nota2, nota3, nota4;
  var media,
    soma = 0;

  nota1 = parseInt(prompt("Digite sua primeira nota: "));
  nota2 = parseInt(prompt("Digite sua segunda nota: "));
  nota3 = parseInt(prompt("Digite sua terceira nota: "));
  nota4 = parseInt(prompt("Digite sua quarta nota: "));

  if (nota1 >= 0 && nota1 < 11) {
    soma = soma + nota1;
  } else {
    escreva("O primeiro numero digitado é invalido");
  }

  if (nota2 >= 0 && nota2 < 11) {
    soma = soma + nota2;
  } else {
    escreva("O segundo numero digitado é invalido");
  }

  if (nota3 >= 0 && nota3 < 11) {
    soma = soma + nota3;
  } else {
    escreva("O terceiro numero digitado é invalido");
  }

  if (nota4 >= 0 && nota4 < 11) {
    soma = soma + nota4;
  } else {
    escreva("O quarto numero digitado é invalido");
  }

  media = soma / 4;

  if (media >= 5.0) {
    escreva("Voce passou no teste!! Parabens");
  } else {
    escreva("Tente novamente!");
  }
}
inicio();
