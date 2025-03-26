programa {
  funcao inicio() {
    //2 - Escreva um algoritmo para ler 2 valores informados pelo usuário e enquanto o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor, mas para a mesma variável. Ou seja, para o segundo valor não pode ser aceito o valor zero nem um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.

    inteiro valor1
    inteiro valor2
    real divisao = 0

    escreva("Bem-vindo ao Resultado da Divisão \n")
    escreva("Digite o primeiro valor: \n")
    leia(valor1)
    escreva("Digite o segundo valor: \n")
    leia(valor2)

    enquanto(valor2 <= 0){
      escreva("Digite o segundo valor novamente, detalhe ele não pode ser menor que zero!: \n")
      leia(valor2)
    }

    divisao = valor1 / valor2

    escreva("O valor da divisão foi: ", divisao)

  }
}
