function inicio() {
  //2 - Escreva um algoritmo para ler 2 valores informados pelo usuário e enquanto o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor, mas para a mesma variável. Ou seja, para o segundo valor não pode ser aceito o valor zero nem um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.

  var valor1, valor2
  var divisao = 0

  alert("Bem-vindo ao Resultado da Divisão \n")
  valor1 = parseInt(prompt("Digite o primeiro valor: \n"))
  valor2 = parseInt(prompt("Digite o segundo valor: \n"))

  while (valor2 <= 0) {
    alert("Digite o segundo valor novamente, detalhe ele não pode ser menor que zero!: \n")
    valor2 = parseInt(prompt("Digite o segundo valor: \n"))
  }

  divisao = valor1 / valor2

  alert("O valor da divisão foi: " + divisao)

}
inicio()
