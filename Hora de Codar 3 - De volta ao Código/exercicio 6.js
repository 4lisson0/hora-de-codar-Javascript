var media = 0
var nota1, nota2, opcao

function inicio() {
  alert("Bem-vindo ao calcular media\n")
  calculo()
}

function opcao() {
  if (opcao == 1) {
    calculo()
  } else if (opcao == 2) {
    alert("Fim do programa!!")
  }
}

function calculo() {
  nota1 = parseInt(prompt("Digite a primeira nota: "))
  nota2 = parseInt(prompt("Digite a segunda nota: "))

  media = (nota1 + nota2) / 2

  alert("Sua média foi: " + media + "\n")

  opcao = parseInt(prompt("Calcular a média de outro aluno Sim/Não? 1 - para Sim e 2 - para Não \n"))
  opcao()
}