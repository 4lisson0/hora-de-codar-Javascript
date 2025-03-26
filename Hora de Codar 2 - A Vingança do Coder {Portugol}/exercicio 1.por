programa {
  funcao inicio() {

    //1. Escreva um programa em que o usuário informe dois números. Então escreva em tela o maior deles.

    inteiro num1
    inteiro num2

    escreva("Bem-vindo ao descubra qual é o maior numero\n")

    escreva("Digite o primeiro numero: ")
    leia(num1)

    escreva("Digite o segundo numero: ")
    leia(num2)

    se (num1 > num2){
      escreva("Primeiro numero é o maior")
    } senao {
      escreva("Segundo numero é maior")
    }
  }
}
