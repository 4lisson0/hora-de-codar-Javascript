// 3 - Vamos criar uma lista de compras.
// Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.
// Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".
// Peça novamente para o usuário digitar o nome de uma fruta para ser removida.
// Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".
// Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

function compras() {
  let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];
  let fruta = "";

  while (frutas.length > 0) {
    document.write("<h1>Lista de frutas disponíveis:</h1>");
    document.write("<ul>");
    frutas.forEach((item) => {
      document.write(`<li>${item}</li>`);
    });
    document.write("</ul>");

    fruta = prompt("Digite o nome de uma fruta para remover da lista:");

    if (frutas.includes(fruta)) {
      frutas.splice(frutas.indexOf(fruta), 1);
      alert("Fruta foi retirada da lista.");
    } else {
      alert("Fruta indisponível no nosso mercado.");
    }

    document.body.innerHTML = "";
  }

  document.write("<h1>Lista de compras finalizada.</h1>");
}
