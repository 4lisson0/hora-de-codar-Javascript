programa {
  
 inteiro media = 0
 inteiro nota1, nota2
 inteiro opcao

  funcao inicio() {
    escreva("Bem-vindo ao calcular media\n")
    calculo()
  }

  funcao opcao(){
    se (opcao == 1){
      calculo()
    } senao se(opcao == 2) {
      escreva("Fim do programa!!")
    }
  }

  funcao calculo(){
    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)

    media = (nota1 + nota2) / 2

    escreva("Sua média foi: ", media, "\n")

    escreva("Calcular a média de outro aluno Sim/Não? 1 - para Sim e 2 - para Não \n")

    leia(opcao)
    opcao()
  }
}
