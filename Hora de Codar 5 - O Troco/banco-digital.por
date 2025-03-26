programa {
  
  real saldo = 350.99

  // função que mostra para o usuário mensagens de bem-vindo e pede o nome dele
  funcao inicio() {

    cadeia nome

    escreva("Bem vindo ao Banco Digital \n")
    escreva("Digite seu nome: ")
    leia(nome)
    escreva("Olá, ", nome, " é um prazer ter você por aqui!")
    menu()
  }

  // função menu, aqui está todo o switch case do projeto, toda a parte está nesta função
  funcao menu(){

    inteiro senha
    inteiro opcao

    escreva(" Escolha uma opção: ")
    escreva("Opcões: \n 1 - Saldo \n 2 - Extrato \n 3 - Saque \n 4 - Depósito \n 5 - Transferência \n 6 - Sair \n")
    leia(opcao)

    escreva("Digite a senha: ")
    leia(senha)

    se(senha == 3589){
      escolha (opcao){
      caso 1:
      verSaldo()

      caso 2:
      escreva("Você gastou R$40.00 com Netflix \n")
      escreva("Você gastou R$100.00 com McDonalds \n")
      escreva("Você gastou R$80.00 com Riot Games \n")
      menu()
      
      caso 3:
      sacarDinheiro()
      verSaldo()

      caso 4:
      fazerDeposito()
      verSaldo()

      caso 5:
      transferencia()

      caso 6:
      escreva(nome, " foi um prazer ter você por aqui!")
      pare

      caso 7:
      funcaoErro()
    }
    } senao {
      escreva("Senha incorreta!! \n")
      menu()
    }
  }

  // função saldo, mostro o saldo que está mockado em uma variavel global antes do inicio
  funcao verSaldo(){
    escreva("Saldo Atualizado, valor atual em: ", saldo, "\n")
    menu()
  }

  // função sacar, o usuário coloca um valor e a funçaõ verifica, sempre que o usuário for sacar dinheiro, o valor a ser sacado não pode ser igual ou menor que zero. Exiba uma mensagem de "Operação não autorizada". E sempre que o usuário for sacar dinheiro, o valor restante não pode ser negativo, ou seja, caso o usuário tente sacar mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".
  funcao sacarDinheiro(){
      real valorSaque
      
      escreva("Informe o valor para o depósito: ")
      leia(valorSaque)
      se(valorSaque < saldo ou valorSaque == 0){
        escreva("Operação não autorizada")
      } senao {
        saldo = saldo - valorSaque
        verSaldo()
        menu()
    }
  }

  //Caso o usuário informe um valor para depósito igual ou menor que zero, não deixe a operação ocorrer. Exiba uma mensagem de "Operação não autorizada".
  funcao fazerDeposito(){
      real valorDeposito
      
      escreva("Informe o valor para o depósito: ")
      leia(valorDeposito)
      se(valorDeposito == 0 ou valorDeposito < 0){
        escreva("Operação não autorizada")
      } senao {
        saldo = saldo + valorDeposito
        verSaldo()
        menu()
      }
  }

  //Função para caso o usuário digite um número que não está nas opções
  funcao funcaoErro(){
    escreva("Número não encontrado escolha novamente \n")
    menu()
  }

  // A transferência consiste em você informar o número de uma conta (pode ser qualquer número, mas obrigatoriamente um número, ou seja, nenhum outro caractere deve ser aceito), perguntar o valor da transferência e remover o valor da conta da mesma forma como na ação do saldo. Caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".
  funcao transferencia(){
    real valorTransferencia
    inteiro agencia

    escreva("Digite a agencia escolhida de até quatro números: \n")
    leia(agencia)

    se(agencia == 0 ou agencia >= 9999){
      escreva("Operação não autorizada \n")
    }senao{
      escreva("Agencia selecionada foi: ", agencia, "\n")
      escreva("Informe o valor para o depósito: ")
      leia(valorTransferencia)
      se(valorTransferencia < saldo ou valorTransferencia == 0){
        escreva("Operação não autorizada \n")
        } senao {
          saldo = saldo - valorTransferencia
          verSaldo()
          menu()
      }
    }
  }
}
