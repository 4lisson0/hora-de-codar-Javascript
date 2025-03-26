programa {
  funcao inicio() {

    //5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

    inteiro num1
    inteiro num2
    inteiro num3
    inteiro num4

    escreva("Bem-vindo ao descubra qual é a média aritmética\n")

    escreva("Escreva primeiro numero: ")
    leia(num1)
    escreva("Escreva segundo numero: ")
    leia(num2)
    escreva("Escreva terceiro numero: ")
    leia(num3)
    escreva("Escreva quarto numero: ")
    leia(num4)

    escreva("O primeiro numero foi: ", num1, "\n")
    escreva("O último valor foi: ", num4, "\n")

    se (num1 > num2 e num1 > num3 e num1 > num4){
      escreva("o maior valor infomado foi: ", num1, "\n")
    } senao se(num2 > num1 e num2 > num3 e num2 > num4){
      escreva("o maior valor infomado foi: ", num2, "\n")
    } senao se(num3 > num1 e num3 > num2 e num3 > num4){
      escreva("o maior valor infomado foi: ", num3, "\n")
    } senao se(num4 > num1 e num4 > num2 e num4 > num3){
      escreva("o maior valor infomado foi: ", num4, "\n")
    }
  }
}
