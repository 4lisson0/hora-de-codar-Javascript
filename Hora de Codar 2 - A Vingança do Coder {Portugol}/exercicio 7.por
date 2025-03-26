programa {
  funcao inicio() {

    //7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

    escreva("Bem-vindo ao programa que lê 6 números digitados e se os números lidos com valor inferior a 72 vão ser somados. \n")

    inteiro num1
    inteiro num2
    inteiro num3
    inteiro num4
    inteiro num5
    inteiro num6
    inteiro soma = 0

    escreva("Escreva primeiro numero: ")
    leia(num1)
    escreva("Escreva segundo numero: ")
    leia(num2)
    escreva("Escreva terceiro numero: ")
    leia(num3)
    escreva("Escreva quarto numero: ")
    leia(num4)
    escreva("Escreva quinto numero: ")
    leia(num5)
    escreva("Escreva sexto numero: ")
    leia(num6)

    se(num1 < 72 ){
      soma = soma + num1
      escreva("Primeiro numero menor que 72 foi: ", num1,"\n")
    } se(num2 < 72 ){
      soma = soma + num2
      escreva("Segundo numero menor que 72 foi: ", num2,"\n")
    } se(num3 < 72 ){
      soma = soma + num3
      escreva("Terceiro numero menor que 72 foi: ", num3,"\n")
    } se(num4 < 72 ){
      soma = soma + num4
      escreva("Quarto numero menor que 72 foi: ", num4,"\n")
    }se(num5 < 72 ){
      soma = soma + num5
      escreva("Quinto numero menor que 72 foi: ", num5,"\n")
    }se(num6 < 72 ){
      soma = soma + num6
      escreva("Sexto numero menor que 72 foi: ", num6,"\n")
    }

    escreva("soma do valor total foi: ", soma)

  }
}
