programa {
  funcao inicio() {
    //10 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

    inteiro numero
    inteiro entre = 0
    inteiro fora = 0
    inteiro i = 1

    enquanto(i <= 10){
      escreva("Digite o ", i, "º numero: ")
      leia(numero)

      se(numero >= 24 e numero <= 42) {
        entre = entre + 1
      } 
      i = i + 1
    }
    escreva("Números entre 24 e 42: ", entre, "\n")
  }
}
