programa {
  funcao inicio() {
    //5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

    inteiro valor1
    inteiro valor2
    real media = 0

    escreva("Bem-vindo ao Resultado da Divisão \n")
    escreva("Digite o primeiro valor: \n")
    leia(valor1)
    escreva("Digite o segundo valor: \n")
    leia(valor2)

    enquanto(valor1 > valor2){
      escreva("Digite o valor novamente, detalhe valor 1 não pode ser maior que o valor 2 \n")
      escreva("Digite o primeiro valor: \n")
      leia(valor1)
      escreva("Digite o segundo valor: \n")
      leia(valor2)
    }

    media = (valor1 + valor2) / 2

    escreva("O valor da media foi: ", media)

  }
}
