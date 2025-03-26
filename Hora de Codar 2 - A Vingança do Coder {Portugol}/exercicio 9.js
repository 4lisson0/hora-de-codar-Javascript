function inicio() {
  //9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

  alert("Bem-vindo ao será que você pode votar?? \n");

  var ano_nascimento, ano_atual;
  var calculo = 0;

  ano_atual = parseInt(prompt("Qual é o ano atual? "));
  ano_nascimento = parseInt(prompt("Qual é o ano de seu nascimento? "));

  calculo = ano_atual - ano_nascimento;

  alert("Sua idade atual é: " + calculo);

  if (calculo < 18) {
    alert("Você ainda não pode votar");
  } else {
    alert("Você pode votar");
  }
}
inicio();
