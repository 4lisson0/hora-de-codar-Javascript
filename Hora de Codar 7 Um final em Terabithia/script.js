var nome = prompt("Digite seu nome: ");
const lista_hospedes_idade = [];
const lista_hospedes = [];
const quartos = Array(20).fill("livre");

function inicio() {
  welcome();
  menu();
}

function welcome() {
  alert(`Bem vindo ao Hotel Tatooine ${nome} é um prazer ter você por aqui!\n`);
}

function menu() {
  var senha;
  var escolha = parseInt(
    prompt(
      "Selecione uma opção:\n 1.) Reserva de Quartos\n 2.) Cadastro de Hóspedes\n 3.) Abastecimento de Carros\n 4.) Eventos\n 5.) Sair"
    )
  );

  senha = parseInt(prompt("Digite a senha: "));

  if (senha == 2678) {
    switch (escolha) {
      case 1:
        reserva_quartos();
        break;
      case 2:
        cadastro_hospedes();
        break;
      case 3:
        abastecer_carros();
        break;
      case 4:
        eventos();
        break;
      case 5:
        sair();
        break;
      default:
        erro();
    }
  } else {
    alert("Senha incorreta!! \n");
    menu();
  }

  function sair() {
    var confirma = prompt("Você deseja sair sim ou não?").toLowerCase();
    if (confirma === "sim") {
      alert("Obrigado por usar o Hotel Tatooine!");
      alert("Volte sempre! \n");
      return;
    } else if (confirma === "não") {
      menu();
    } else {
      alert("Por favor, responda com 'sim' ou 'não'.");
      sair();
    }
  }

  function reserva_quartos() {
    if (!lista_hospedes.includes(nome)) {
      alert(
        `Usuário ${nome} não está cadastrado. Por favor, cadastre-se antes de efetuar uma reserva.`
      );
      menu();
      return;
    }

    const indiceHospede = lista_hospedes.indexOf(nome);
    const idadeHospede = lista_hospedes_idade[indiceHospede];

    welcome();
    alert("Hotel Tatooine - RESERVA DE QUARTOS");

    let listaQuartos = "Lista de quartos e suas ocupações:\n";
    for (let i = 0; i < quartos.length; i++) {
      listaQuartos += `${i + 1} - ${quartos[i]}\n`;
    }
    alert(listaQuartos);

    let valorDiaria;
    let qtdDias;

    while (true) {
      valorDiaria = parseFloat(prompt("Informe o valor da diária: "));
      if (isNaN(valorDiaria) || valorDiaria <= 0) {
        alert(
          "Valor inválido. Por favor, informe um valor numérico maior que zero."
        );
      } else {
        break;
      }
    }

    while (true) {
      qtdDias = parseInt(prompt("Informe a quantidade de dias: "));
      if (isNaN(qtdDias) || qtdDias <= 0) {
        alert(
          `Quantidade inválida ${nome}. Por favor, informe um número maior que zero.`
        );
      } else if (qtdDias > 30) {
        alert(
          `Quantidade de dias inválida ${nome}. O máximo permitido é 30 dias.`
        );
      } else {
        break;
      }
    }

    let desconto = 0;
    if (idadeHospede < 6) {
      desconto = 1;
      alert(`Hóspede com ${idadeHospede} anos. Reserva gratuita!`);
    } else if (idadeHospede > 60) {
      desconto = 0.5;
      alert(`Hóspede com ${idadeHospede} anos. Desconto de 50% aplicado!`);
    } else {
      desconto = 0;
      alert(`Hóspede com ${idadeHospede} anos. Valor integral aplicado.`);
    }

    const valorTotal = valorDiaria * qtdDias * (1 - desconto);
    alert(`O valor total da reserva é: R$${valorTotal.toFixed(2)}`);

    while (true) {
      let quartoEscolhido = parseInt(
        prompt("Informe o número do quarto para reserva (1 a 20):")
      );
      if (
        isNaN(quartoEscolhido) ||
        quartoEscolhido < 1 ||
        quartoEscolhido > 20
      ) {
        alert("Número inválido. Escolha um número entre 1 e 20.");
        continue;
      }

      if (quartos[quartoEscolhido - 1] === "ocupado") {
        alert(
          `O quarto ${quartoEscolhido} já está ocupado. Por favor, escolha outro.`
        );
      } else {
        quartos[quartoEscolhido - 1] = "ocupado";
        alert(
          `${nome}, o quarto ${quartoEscolhido} foi reservado com sucesso!`
        );
        break;
      }
    }

    menu();
  }

  function abastecer_carros() {
    alert("Hotel Tatooine - ABASTEÇA SUA XWING FIGHTER");

    let alcoolWayne = parseFloat(
      prompt("Qual o valor do álcool no posto Wayne Oil?")
    );
    let gasolinaWayne = parseFloat(
      prompt("Qual o valor da gasolina no posto Wayne Oil?")
    );
    let alcoolStark = parseFloat(
      prompt("Qual o valor do álcool no posto Stark Petrol?")
    );
    let gasolinaStark = parseFloat(
      prompt("Qual o valor da gasolina no posto Stark Petrol?")
    );

    if (
      isNaN(alcoolWayne) ||
      isNaN(gasolinaWayne) ||
      isNaN(alcoolStark) ||
      isNaN(gasolinaStark)
    ) {
      alert("Por favor, informe valores válidos para os combustíveis.");
      menu();
      return;
    }

    const tanqueCarro = 42;

    const custoAlcoolWayne = alcoolWayne * tanqueCarro;
    const custoGasolinaWayne = gasolinaWayne * tanqueCarro;
    const custoAlcoolStark = alcoolStark * tanqueCarro;
    const custoGasolinaStark = gasolinaStark * tanqueCarro;

    // Se o preço do álcool for menor ou igual a 70% do preço da gasolina, o álcool será mais vantajoso. Isso é representado pela multiplicação do preço da gasolina por 0.7
    const vantagemWayne =
      alcoolWayne <= gasolinaWayne * 0.7 ? "álcool" : "gasolina";
    const vantagemStark =
      alcoolStark <= gasolinaStark * 0.7 ? "álcool" : "gasolina";

    let postoMaisBarato = "";
    let combustivelMaisBarato = "";

    if (
      custoAlcoolWayne < custoGasolinaWayne &&
      custoAlcoolWayne < custoAlcoolStark &&
      custoAlcoolWayne < custoGasolinaStark
    ) {
      postoMaisBarato = "Wayne Oil";
      combustivelMaisBarato = "álcool";
    } else if (
      custoGasolinaWayne < custoAlcoolWayne &&
      custoGasolinaWayne < custoAlcoolStark &&
      custoGasolinaWayne < custoGasolinaStark
    ) {
      postoMaisBarato = "Wayne Oil";
      combustivelMaisBarato = "gasolina";
    } else if (
      custoAlcoolStark < custoAlcoolWayne &&
      custoAlcoolStark < custoGasolinaWayne &&
      custoAlcoolStark < custoGasolinaStark
    ) {
      postoMaisBarato = "Stark Petrol";
      combustivelMaisBarato = "álcool";
    } else {
      postoMaisBarato = "Stark Petrol";
      combustivelMaisBarato = "gasolina";
    }

    alert(
      `No posto Wayne Oil, é mais vantajoso abastecer com ${vantagemWayne}.\n` +
        `No posto Stark Petrol, é mais vantajoso abastecer com ${vantagemStark}.\n\n` +
        `O posto mais barato para abastecer é o ${postoMaisBarato}, com ${combustivelMaisBarato}.`
    );

    menu();
  }

  function eventos() {
    alert("Hotel Tatooine - EVENTOS");

    let numConvidados = parseInt(
      prompt("Qual o número de convidados para o seu evento?")
    );

    if (isNaN(numConvidados) || numConvidados <= 0) {
      alert("Por favor, insira um número válido de convidados.");
      eventos();
      return;
    }

    if (numConvidados > 220 && numConvidados <= 350) {
      alert("Auditório Colorado é o ideal!");
    } else if (numConvidados > 150 && numConvidados <= 220) {
      alert(
        "Auditório Laranja é o ideal, porém será necessário adicionar mais cadeiras."
      );
      let cadeirasAdd = numConvidados - 150;
      alert(
        `Você terá que adicionar ${cadeirasAdd} cadeiras para acomodar todos os convidados`
      );
    } else if (numConvidados > 350) {
      alert("Quantidade de convidados superior à capacidade máxima.");
      eventos();
    } else {
      alert("Os auditórios estão disponíveis para o número de convidados.");
    }

    menu();
  }

  function erro() {
    alert("Por favor, informe um número entre 1 a 5");
    menu();
  }

  function sistema_cadastrar_hospedes() {
    var escolha_hospedes = parseInt(
      prompt(
        "Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair"
      )
    );

    switch (escolha_hospedes) {
      case 1:
        cadastrar_hospedes();
      case 2:
        pesquisar_hospedes();
      case 3:
        menu();
    }

    function cadastro_hospedes() {
      if (lista_hospedes.length >= 15) {
        alert("Numero máximo de hóspedes cadastrados.");
      } else {
        var nome_hospede = prompt("Por favor, informe o nome da(o) hóspede:");

        lista_hospedes.push(nome_hospede);
        console.log(lista_hospedes);
        alert(
          "Sucesso! Hóspede " +
            nome_hospede +
            " foi cadastrada(o) com sucesso!\n"
        );
      }

      sistema_cadastrar_hospedes();
    }

    function pesquisar_hospedes() {
      var nome_hospede = prompt(
        "Por favor, informe o nome da(o) hóspede para pesquisa:"
      );
      if (lista_hospedes.includes(nome_hospede)) {
        alert(nome_hospede + " encontrada(o).");
      } else {
        alert(nome_hospede + " não foi encontrada(o).");
      }

      sistema_cadastrar_hospedes();
    }

    function erro_pesquisar_hospedes() {
      alert("Por favor, informe um número entre 1 e 3");
      sistema_cadastrar_hospedes();
    }

    sistema_cadastrar_hospedes();
  }
}
inicio();
