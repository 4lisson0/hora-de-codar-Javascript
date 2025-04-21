let nome;

do {
  nome = prompt("Digite seu nome: ");
  if (!nome || nome.trim() === "") {
    alert("O nome não pode ser vazio. Por favor, insira um nome válido.");
  }
} while (!nome || nome.trim() === "");

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
      "Selecione uma opção:\n 1.) Reserva de Quartos\n 2.) Cadastro de Hóspedes\n 3.) Abastecimento de Carros\n 4.) Eventos\n 5.) Manutenção\n 6.) Sair\n\n"
    )
  );

  senha = parseInt(prompt("Digite a senha: "));

  if (senha == 2678) {
    switch (escolha) {
      case 1:
        reserva_quartos();
        break;
      case 2:
        sistema_cadastrar_hospedes();
        break;
      case 3:
        abastecer_carros();
        break;
      case 4:
        eventos();
        break;
      case 5:
        manutencao();
        break;
      case 6:
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
      alert(
        "Obrigado por usar o Hotel Tatooine\nVolte sempre\nQue a força esteja com você!"
      );
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

    let auditório = "";

    if (numConvidados > 220 && numConvidados <= 350) {
      auditório = "Auditório Colorado";
      alert(`${auditório} é o ideal`);
    } else if (numConvidados > 150 && numConvidados <= 220) {
      auditório = "Auditório Laranja";
      alert(`${auditório} é o ideal para o seu evento.`);
      let cadeirasAdd = numConvidados - 150;
      alert(
        `Você terá que adicionar ${cadeirasAdd} cadeiras para acomodar todos os convidados`
      );
    } else if (numConvidados > 350) {
      alert("Quantidade de convidados superior à capacidade máxima.");
      eventos();
    }

    alert("Agora vamos ver a agenda do evento.");

    const diasSemana = ["segunda", "terca", "quarta", "quinta", "sexta"];
    const diasFimDeSemana = ["sabado", "domingo"];

    const dia = prompt("Qual o dia do seu evento?").toLowerCase();
    if (!diasSemana.includes(dia) && !diasFimDeSemana.includes(dia)) {
      alert("Por favor, insira um dia válido da semana.");
      eventos();
    }

    const hora = parseInt(prompt("Qual a hora do seu evento?"));
    if (isNaN(hora) || hora < 0 || hora > 23) {
      alert("Por favor, insira uma hora válida entre 0 e 23.");
      eventos();
    }

    let disponivel = false;

    if (diasSemana.includes(dia) && hora >= 7 && hora <= 23) {
      disponivel = true;
    } else if (diasFimDeSemana.includes(dia) && hora >= 7 && hora <= 15) {
      disponivel = true;
    }

    if (!disponivel) {
      alert("Auditório indisponível.");
      eventos();
    }

    const empresa = prompt("Qual o nome da empresa?").toLowerCase();
    alert(
      `Auditório reservado para ${empresa}. ${auditório}, ${capitalize(
        dia
      )} às ${hora}hs.`
    );

    const duracaoEvento = parseInt(
      prompt("Qual a duração do evento em horas?")
    );

    if (isNaN(duracaoEvento) || duracaoEvento <= 0) {
      alert("Por favor, insira uma duração válida.");
      eventos();
    }

    const garconsBase = Math.ceil(numConvidados / 12);
    const garconsAdicionais = Math.ceil(duracaoEvento / 2);
    const totalGarcons = garconsBase + garconsAdicionais;
    const custoGarcons = totalGarcons * duracaoEvento * 10.5;

    alert(`São necessários ${totalGarcons} garçons.`);
    alert(`Custo: R$ ${custoGarcons.toFixed(2)}`);
    alert("Agora vamos calcular o buffet do hotel para o evento.");

    const cafeLitros = numConvidados * 0.2;
    const aguaLitros = numConvidados * 0.5;
    const salgados = numConvidados * 7;

    const custoCafe = cafeLitros * 0.8;
    const custoAgua = aguaLitros * 0.4;
    const custoSalgados = Math.ceil(salgados / 100) * 34;

    const custoTotalBuffet = custoCafe + custoAgua + custoSalgados;

    alert(
      `O evento precisará de ${cafeLitros.toFixed(
        1
      )} litros de café, ${aguaLitros.toFixed(
        1
      )} litros de água, ${salgados} salgados.`
    );

    alert(
      `Custo do Buffet:\n- Café: R$${custoCafe.toFixed(
        2
      )}\n- Água: R$${custoAgua.toFixed(
        2
      )}\n- Salgados: R$${custoSalgados.toFixed(
        2
      )}\n\nCusto Total: R$${custoTotalBuffet.toFixed(2)}`
    );

    const custoTotalEvento = custoGarcons + custoTotalBuffet;

    alert(
      `Evento no ${auditório}.\n` +
        `Nome da Empresa: ${empresa}.\n` +
        `Data: ${capitalize(dia)}, ${hora}H.\n` +
        `Duração do evento: ${duracaoEvento}H.\n` +
        `Quantidade de garçons: ${totalGarcons}.\n` +
        `Quantidade de Convidados: ${numConvidados}.\n` +
        `Custo do garçons: R$${custoGarcons.toFixed(2)}.\n` +
        `Custo do Buffet: R$${custoTotalBuffet.toFixed(2)}.\n\n` +
        `Valor total do Evento: R$${custoTotalEvento.toFixed(2)}.`
    );

    const confirmarReserva = prompt(
      "Gostaria de efetuar a reserva? (S/N)"
    ).toLowerCase();

    if (confirmarReserva === "s" || confirmarReserva === "sim") {
      alert(`${nome}, reserva efetuada com sucesso.`);
    } else {
      alert("Reserva não efetuada.");
    }
  }

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
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
      case 4:
        erro_pesquisar_hospedes();
        break;
    }

    function cadastrar_hospedes() {
      while (true) {
        var nome_hospede = prompt(
          'Por favor, informe o nome da(o) hóspede (ou digite "sair" para encerrar):'
        );
        if (nome_hospede.toLowerCase() === "sair") {
          break;
        }

        var idade_hospede = prompt(
          `Por favor, informe a idade de ${nome_hospede}:`
        );
        if (lista_hospedes.length >= 15) {
          alert("Número máximo de hóspedes cadastrados.");
          break;
        } else if (idade_hospede < 6) {
          lista_hospedes.push(nome_hospede);
          lista_hospedes_idade.push(idade_hospede);
          console.log(lista_hospedes);
          alert(
            `Idade de ${nome_hospede} é ${idade_hospede}, logo sua entrada é gratuita`
          );
          alert(
            "Sucesso! Hóspede " +
              nome_hospede +
              " foi cadastrada(o) com sucesso!\n"
          );
        } else if (idade_hospede > 60) {
          lista_hospedes.push(nome_hospede);
          lista_hospedes_idade.push(idade_hospede);
          console.log(lista_hospedes);
          alert(
            `Idade de ${nome_hospede} é ${idade_hospede}, logo valor da entrada é meia`
          );
          alert(
            "Sucesso! Hóspede " +
              nome_hospede +
              " foi cadastrada(o) com sucesso!\n"
          );
        } else {
          lista_hospedes.push(nome_hospede);
          lista_hospedes_idade.push(idade_hospede);
          console.log(lista_hospedes);
          alert(
            `Idade de ${nome_hospede} é ${idade_hospede}, valor da entrada é inteira`
          );
          alert(
            "Sucesso! Hóspede " +
              nome_hospede +
              " foi cadastrada(o) com sucesso!\n"
          );
        }
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

  function manutencao() {
    alert("Hotel Tatooine - MANUTENÇÃO");

    let orcamentos = [];

    while (true) {
      let nomeEmpresa,
        valorPorAparelho,
        qtdAparelhos,
        descontoPercentual,
        minAparelhosDesconto;
      let calculo = 0;

      while (true) {
        nomeEmpresa = prompt("Qual o nome da empresa?");
        if (!nomeEmpresa || nomeEmpresa.trim() === "") {
          alert(
            "O nome da empresa não pode ser vazio. Por favor, insira um nome válido."
          );
        } else {
          break;
        }
      }

      while (true) {
        valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
        if (isNaN(valorPorAparelho) || valorPorAparelho <= 0) {
          alert(
            "Valor inválido. Por favor, informe um valor numérico maior que zero."
          );
        } else {
          break;
        }
      }

      while (true) {
        qtdAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
        if (isNaN(qtdAparelhos) || qtdAparelhos <= 0) {
          alert(
            "Quantidade inválida. Por favor, informe um número maior que zero."
          );
        } else {
          break;
        }
      }

      while (true) {
        descontoPercentual = parseFloat(
          prompt("Qual a porcentagem de desconto?")
        );
        if (isNaN(descontoPercentual) || descontoPercentual < 0) {
          alert(
            "Porcentagem inválida. Por favor, informe um valor maior ou igual a zero."
          );
        } else {
          break;
        }
      }

      while (true) {
        minAparelhosDesconto = parseInt(
          prompt("Qual o número mínimo de aparelhos para conseguir o desconto?")
        );
        if (isNaN(minAparelhosDesconto) || minAparelhosDesconto <= 0) {
          alert(
            "Quantidade inválida. Por favor, informe um número maior que zero."
          );
        } else {
          break;
        }
      }

      calculo = valorPorAparelho * qtdAparelhos;

      if (qtdAparelhos >= minAparelhosDesconto) {
        const desconto = calculo * (descontoPercentual / 100);
        calculo -= desconto;
      }

      orcamentos.push({ nome: nomeEmpresa, valor: calculo });

      alert(`O serviço de ${nomeEmpresa} custará R$ ${calculo.toFixed(2)}`);

      const continuar = prompt(
        "Deseja informar novos dados? (S/N)"
      ).toLowerCase();
      if (continuar === "n") {
        break;
      }
    }

    if (orcamentos.length === 0) {
      alert("Nenhum orçamento foi registrado.");
    } else {
      let menorOrcamento = orcamentos[0];
      for (let i = 1; i < orcamentos.length; i++) {
        if (orcamentos[i].valor < menorOrcamento.valor) {
          menorOrcamento = orcamentos[i];
        }
      }
      alert(
        `Os orçamentos registrados foram:\n` +
          orcamentos
            .map((orcamento, index) => {
              return `${index + 1} - ${
                orcamento.nome
              }: R$ ${orcamento.valor.toFixed(2)}`;
            })
            .join("\n") +
          `\n\n` +
          `O orçamento de menor valor é o de ${
            menorOrcamento.nome
          } por R$ ${menorOrcamento.valor.toFixed(2)}` +
          "\n\n" +
          "Obrigado por usar o Hotel Tatooine! \n" +
          "Que a força esteja com você! \n" +
          "Volte sempre!"
      );
    }

    menu();
  }

  function erro() {
    alert("Por favor, informe um número entre 1 a 6");
    menu();
  }
}
inicio();
