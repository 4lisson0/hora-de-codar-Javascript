var saldo = 350.99;
inicio();
// função que mostra para o usuário mensagens de bem-vindo e pede o nome dele
function inicio() {
  var nome;

  alert("Bem vindo ao Banco Digital \n");
  nome = prompt("Digite seu nome: ");
  alert("Olá, " + nome + " é um prazer ter você por aqui!");
  menu();
}

// função menu, aqui está todo o switch case do projeto, toda a parte está nesta função
function menu() {
  var senha, opcao;

  alert(" Escolha uma opção: ");
  opcao = parseInt(
    prompt(
      "Opcões: \n 1 - Saldo \n 2 - Extrato \n 3 - Saque \n 4 - Depósito \n 5 - Transferência \n 6 - Sair \n"
    )
  );

  senha = parseInt(prompt("Digite a senha: "));

  if (senha == 3589) {
    switch (opcao) {
      case 1:
        verSaldo();

      case 2:
        alert("Você gastou R$40.00 com Netflix \n");
        alert("Você gastou R$100.00 com McDonalds \n");
        alert("Você gastou R$80.00 com Riot Games \n");
        menu();

      case 3:
        sacarDinheiro();
        verSaldo();

      case 4:
        fazerDeposito();
        verSaldo();

      case 5:
        transferencia();

      case 6:
        alert(nome + " foi um prazer ter você por aqui!");
        break;

      case 7:
        funcaoErro();
    }
  } else {
    alert("Senha incorreta!! \n");
    menu();
  }
}

// função saldo, mostro o saldo que está mockado em uma variavel global antes do inicio
function verSaldo() {
  alert("Saldo Atualizado, valor atual em: " + saldo + "\n");
  menu();
}

// função sacar, o usuário coloca um valor e a funçaõ verifica, sempre que o usuário for sacar dinheiro, o valor a ser sacado não pode ser igual ou menor que zero. Exiba uma mensagem de "Operação não autorizada". E sempre que o usuário for sacar dinheiro, o valor restante não pode ser negativo, ou seja, caso o usuário tente sacar mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".
function sacarDinheiro() {
  var valorSaque;

  valorSaque = parseInt(prompt("Informe o valor para o depósito: "));
  if (valorSaque < saldo || valorSaque == 0) {
    alert("Operação não autorizada");
  } else {
    saldo = saldo - valorSaque;
    verSaldo();
    menu();
  }
}

//Caso o usuário informe um valor para depósito igual ou menor que zero, não deixe a operação ocorrer. Exiba uma mensagem de "Operação não autorizada".
function fazerDeposito() {
  var valorDeposito;

  valorDeposito = parseInt(prompt("Informe o valor para o depósito: "));
  if (valorDeposito == 0 || valorDeposito < 0) {
    alert("Operação não autorizada");
  } else {
    saldo = saldo + valorDeposito;
    verSaldo();
    menu();
  }
}

//Função para caso o usuário digite um número que não está nas opções
function funcaoErro() {
  alert("Número não encontrado escolha novamente \n");
  menu();
}

// A transferência consiste em você informar o número de uma conta (pode ser qualquer número, mas obrigatoriamente um número, ou seja, nenhum outro caractere deve ser aceito), perguntar o valor da transferência e remover o valor da conta da mesma forma como na ação do saldo. Caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".
function transferencia() {
  var valorTransferencia, agencia;

  agencia = parseInt(
    prompt("Digite a agencia escolhida de até quatro números: \n")
  );

  if (agencia == 0 || agencia >= 9999) {
    alert("Operação não autorizada \n");
  } else {
    alert("Agencia selecionada foi: " + agencia + "\n");
    valorTransferencia = parseInt(prompt("Informe o valor para o depósito: "));
    if (valorTransferencia < saldo || valorTransferencia == 0) {
      alert("Operação não autorizada \n");
    } else {
      saldo = saldo - valorTransferencia;
      verSaldo();
      menu();
    }
  }
}
