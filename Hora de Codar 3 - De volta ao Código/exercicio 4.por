programa {
  funcao inicio() {

    //4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
    
    inteiro valor1
    inteiro valor2
    inteiro media

    escreva("Bem-vindo a média aritmética dos números inteiros entre 15 e 100. \n")

    escreva("Digite o primeiro valor: \n")
    leia(valor1)
    escreva("Digite o segundo valor: \n")
    leia(valor2)

    se(valor1 < 15 e valor2 < 100){
      escreva("Digite os valores novamente")
    }senao{
      media = (valor1 + valor2) / 2
      escreva("A média aritmética dos valores digitados são: ", media)
    }

  }
}
