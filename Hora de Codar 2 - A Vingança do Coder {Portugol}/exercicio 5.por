programa {
  funcao inicio() {

    //5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

    inteiro num1
    inteiro num2
    inteiro num3
    inteiro num4
    inteiro num5
    inteiro num6
    real soma
    real media

    escreva("Bem-vindo ao descubra qual é a média aritmética\n")

    escreva("Escreva primeiro numero: ")
    leia(num1)
    escreva("Escreva segundo numero: ")
    leia(num2)
    escreva("Escreva terceiro numero: ")
    leia(num3)
    escreva("Escreva quarto numero: ")
    leia(num4)
    escreva("Escreva quinto numero: ")
    leia(num5)
    escreva("Escreva sexto numero: ")
    leia(num6)

    soma = (num1 + num2 + num3 + num4 + num5 + num6)
    media = soma / 6

    escreva("A média aritmética é: ", media)


  }
}
