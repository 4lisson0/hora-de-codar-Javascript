programa {
  funcao inicio() {

    //2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

    inteiro numero

    escreva("Bem-vindo ao descubra se o numero é positivo, negativo e zero\n ")

    escreva("Escreva o numero: ")
    leia(numero)

    se (numero > 0){
      escreva("Seu numero é positivo")
    } senao se (numero < 0) {
       escreva("Seu numero é negativo")
    } senao {
      escreva("Seu numero é zero")
    }
  }
}
