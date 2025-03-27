function inicio() {
  // 1 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. No final da repetição escreva "EXPLOSÃO".

  alert("Sua hora está acabando, corte o fio logo")

  var contador = 30

  while (contador > 0) {
    document.write("<p>Contagem em: </p>" + contador + "\n")
    contador = contador - 1
    if(contador == 0){
      document.write("<p>Boooommm!!!</p>")
    }
  }
}
inicio()
