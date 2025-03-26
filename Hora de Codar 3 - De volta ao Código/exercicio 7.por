programa {
  funcao inicio() {

    inteiro nota1
    inteiro nota2
    inteiro nota3
    inteiro nota4
    inteiro nota5
    inteiro nota6

    real soma = 0
    real media = 0

    escreva("Digite primeira nota: ")
    leia(nota1)

    escreva("Digite segunda nota: ")
    leia(nota2)

    escreva("Digite terceira nota: ")
    leia(nota3)

    escreva("Digite quarta nota: ")
    leia(nota4)

    escreva("Digite quinta nota: ")
    leia(nota5)

    escreva("Digite sexta nota: ")
    leia(nota6)

    enquanto(nota1 < 0 ou nota1 > 10){
      escreva("Primeira nota invalida, escreva um valor de 0 á 10 \n")
      escreva("Digite a primeira nota novamente: ")
      leia(nota1)
    } 
    
    enquanto(nota2 < 0 ou nota2 > 10){
      escreva("Segunda nota invalida, escreva um valor de 0 á 10 \n")
      escreva("Digite a segunda nota novamente: ")
      leia(nota2)
    } 

    enquanto(nota3 < 0 ou nota3 > 10){
      escreva("Terceira nota invalida, escreva um valor de 0 á 10 \n")
      escreva("Digite a terceira nota novamente: ")
      leia(nota3)
    } 

    enquanto(nota4 < 0 ou nota4 > 10){
      escreva("Quarta nota invalida, escreva um valor de 0 á 10 \n")
      escreva("Digite a quarta nota novamente: ")
      leia(nota4)
    } 

    enquanto(nota5 < 0 ou nota5 > 10){
      escreva("Quinta nota invalida, escreva um valor de 0 á 10 \n")
      escreva("Digite a quinta nota novamente: ")
      leia(nota5)
    } 

    enquanto(nota6 < 0 ou nota6 > 10){
      escreva("Sexta nota invalida, escreva um valor de 0 á 10 \n")
      escreva("Digite a sexta nota novamente: ")
      leia(nota6)
    } 

    media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6
    escreva("Média das notas foram: ", media)
    
  } 
}
