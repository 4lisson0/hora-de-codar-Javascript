programa {
  funcao inicio() {

//11. Uma micro calculadora
//Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
//O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

    escreva("Bem-vindo ao será que você pode votar?? \n")

    inteiro forma
    inteiro valor_1
    inteiro valor_2
    inteiro calculo = 0

    escreva("Digite sua operação: \n 1 - Adição \n 2 - Subtração \n 3 - Divisão \n 4 - Multiplicação \n")
    leia(forma)

    escreva("Agora quero saber qual é o primeiro valor escolhido. Digite o valor abaixo: \n")
    leia(valor_1)
    escreva("Agora quero saber qual é o segundo valor escolhido. Digite o valor abaixo: \n")
    leia(valor_2)

    se(forma == 1){
      escreva("A operação selecionada foi adição \n")
      calculo = valor_1 + valor_2
      escreva("A soma dos valores digitados foram: ", calculo)
    } se (forma == 2){
      escreva("A operação selecionada foi subtração \n")
      calculo = valor_1 - valor_2
      escreva("A subtração dos valores digitados foram: ", calculo)
    } se (forma == 3){
      escreva("A operação selecionada foi divisão \n")
      calculo = valor_1 / valor_2
      escreva("A divisão dos valores digitados foram: ", calculo)
    } se (forma == 4){
      escreva("A operação selecionada foi multiplicação \n")
      calculo = valor_1 * valor_2
      escreva("A multiplicação dos valores digitados foram: ", calculo)
    }
    

  
  }
}
