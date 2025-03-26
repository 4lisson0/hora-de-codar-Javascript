programa {
  funcao inicio() {

    //4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

    inteiro num1
    inteiro num2
    inteiro num3

    escreva("Bem-vindo ao descubra qual é o maior numero\n")

    escreva("Escreva primeiro numero: ")
    leia(num1)
    escreva("Escreva segundo numero: ")
    leia(num2)
    escreva("Escreva terceiro numero: ")
    leia(num3)

    se (num1 < num2 e num1 < num3){
      escreva("Soma dos numeros é: ", num2 + num3)
    } senao se (num2 < num1 e num2 < num3){
      escreva("Soma dos numeros é: ", num1 + num3)
    }  senao se (num3 < num2 e num3 < num1){
      escreva("Soma dos numeros é: ", num1 + num2)
    }
  }
}
