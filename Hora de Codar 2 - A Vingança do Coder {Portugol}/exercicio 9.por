programa {
  funcao inicio() {

    //9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

    escreva("Bem-vindo ao será que você pode votar?? \n")

    inteiro ano_nascimento
    inteiro ano_atual
    inteiro calculo = 0

    escreva("Qual é o ano atual? ")
    leia(ano_atual)
    escreva("Qual é o ano de seu nascimento? ")
    leia(ano_nascimento)

    calculo = ano_atual - ano_nascimento

    escreva("Sua idade atual é: ", calculo, "\n")

    se(calculo < 18){
      escreva("Você ainda não pode votar")
    } senao {
      escreva("Você pode votar")
    }


  }
}
