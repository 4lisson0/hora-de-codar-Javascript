programa {
  funcao inicio() {

    //3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

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

    se (num1 > num2 e num1 > num3){
      escreva("Primeiro numero é maior")
    } senao se (num2 > num1 e num2 > num3){
      escreva("Segundo numero é maior")
    }  senao se (num3 > num2 e num3 > num1){
      escreva("Terceiro numero é maior")
    }
  }
}
