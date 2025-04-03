// 2 - Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"
// e, em seguida, peça ao usuário para digitar o nome de um planeta.
// Verifique se o planeta que o usuário informou está na array e informe ao usuário.

function inicio() {
  alert("Bem-vindo ao sistema de cadastro de planetas!");

  let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
  let planeta = "";

  planeta = prompt("Digite o nome de um planeta:");

  if (planeta === null ) {
    alert("Você não digitou nada. O programa será encerrado.");
    return;
  }else{
    planetas.push(planeta);
  }

  if (planetas.includes(planeta)) {
    alert(`O planeta ${planeta} está na lista!`);
    document.write(`<h1>Planetas disponíveis:</h1>`);
    document.write("<ul>");
    planetas.forEach((nome) => {
      document.write(`<li>${nome}</li>`);
    });
    document.write("</ul>");
  } else {
    alert(`O planeta ${planeta} não está na lista!`);
  }
}
inicio();