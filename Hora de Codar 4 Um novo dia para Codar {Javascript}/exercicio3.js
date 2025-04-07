// 3 - Vamos criar uma lista de compras.
// Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.
// Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".
// Peça novamente para o usuário digitar o nome de uma fruta para ser removida.
// Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".
// Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

function compras() {
  let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];
  let fruta = "";

  alert("Bem-vindo ao sistema de compras!");
  alert("Frutas disponíveis: " + frutas);

  while (frutas.length > 0) {
    fruta = prompt("Digite o nome de uma fruta para remover da lista:");
    alert("Você digitou: " + fruta);

    if (frutas.includes(fruta)) {
      frutas.splice(frutas.indexOf(fruta), 1);
      alert("Fruta foi retirada da lista.");
      alert("Frutas disponíveis: " + frutas);
    } else {
      alert("Fruta indisponível no nosso mercado.");
      alert("Frutas disponíveis: " + frutas);
    }
  }
  alert("Lista de compras finalizada.");
}
compras();
