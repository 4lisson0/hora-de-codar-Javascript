function inicio() {
  //5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

  var valor1, valor2
  var media = 0

  alert("Bem-vindo ao Resultado da Divisão \n")
  valor1 = parseInt(prompt("Digite o primeiro valor: \n"))
  valor2 = parseInt(prompt("Digite o segundo valor: \n"))

  while (valor1 > valor2) {
    alert("Digite o valor novamente, detalhe valor 1 não pode ser maior que o valor 2 \n")
    inicio()
  }

  media = (valor1 + valor2) / 2

  alert("O valor da media foi: " + media)

}
inicio()
