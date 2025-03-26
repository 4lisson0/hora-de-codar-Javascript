programa {
  funcao inicio() {

    //10. Tendo como entrada a altura e o gênero designado ao nascer (codificado da seguinte forma: 1: feminino - 2: masculino - ) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas.

    escreva("Bem-vindo ao será que você pode votar?? \n")

    inteiro forma
    real altura
    inteiro calculo_masculino = 0
    inteiro calculo_feminino = 0

    escreva("Digite sua forma: \n 1 - para masculino \n 2 - para feminino \n")
    leia(forma)

    se(forma == 1){
      escreva("Sua forma biológica é masculino \n")
    } se (forma == 2){
      escreva("Sua forma biológica é feminina \n")
    }

    escreva("Agora escreva sua altura: \n")
    leia(altura)

    se(forma == 1){
      calculo_masculino = (71.7 * altura) - 58
      escreva("Seu peso ideal para não correr risco em questões de doenças trazidas pela obsidade é: ", calculo_masculino)
    } se (forma == 2){
      calculo_feminino = (62.1 * altura) - 44.7
       escreva("Seu peso ideal para não correr risco em questões de doenças trazidas pela obsidade é: ", calculo_feminino)
    }
  }
}
