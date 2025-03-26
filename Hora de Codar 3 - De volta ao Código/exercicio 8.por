programa {
  funcao inicio() {
    //8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

    inteiro numero
    inteiro n = 1

    escreva("Escreva valor de um numero: ")
    leia(numero)

    enquanto(n <= numero){
      escreva("Contagem em: ", n++, "\n")
      
    }
  }
}
