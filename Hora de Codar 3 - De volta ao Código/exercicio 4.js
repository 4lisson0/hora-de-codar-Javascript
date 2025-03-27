function inicio() {

  //4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

  var valor1, valor2
  var media

  alert("Bem-vindo a média aritmética dos números inteiros entre 15 e 100. \n")

  valor1 = parseInt(prompt("Digite o primeiro valor: \n"))
  valor2 = parseInt(prompt("Digite o segundo valor: \n"))

  if (valor1 < 15 && valor2 < 100) {
    alert("Digite os valores novamente")
    inicio()
  } else {
    media = (valor1 + valor2) / 2
    alert("A média aritmética dos valores digitados são: " + media)
  }

}
inicio()

