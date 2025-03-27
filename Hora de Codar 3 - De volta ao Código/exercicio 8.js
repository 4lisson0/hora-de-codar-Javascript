function inicio() {
  //8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

  alert("Bem-vindo a contagem de números inteiros \n")
  
  var numero
  var n = 1

  numero = parseInt(prompt("Escreva valor de um numero: "))

  while (n <= numero) {
    alert("Contagem em: " + n++ + "\n")
  }
}
inicio()
