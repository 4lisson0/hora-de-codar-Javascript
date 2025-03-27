function inicio() {
  //10 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

  var numero
  var entre = 0
  var i = 1

  while (i <= 10) {
    alert("Digite o " + i + "º numero: ")
    numero = parseInt(prompt("Digite o " + i + "º numero: "))

    if (numero >= 24 && numero <= 42) {
      entre = entre + 1
    }
    i = i + 1
  }
  escreva("Números entre 24 e 42: " + entre + "\n")
}
inicio()
