// 1 - Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida,
// Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e
// a lista com cada um deles.

function inicio() {
    alert("Bem-vindo ao sistema de cadastro de estudantes!");
  
    let estudantes = [];
    let estudante = "";
  
    while (true) {
      estudante = prompt("Digite o nome do estudante (ou digite 'PARE' para encerrar):");
  
      if (estudante.toUpperCase() === "PARE") {
        break; // Encerra o loop se o usuário digitar "PARE"
      }
  
      if (estudante.trim() !== "") {
        estudantes.push(estudante); 
      }
    }
  
    document.write(`<h1>Total de estudantes cadastrados: ${estudantes.length}</h1>`);
    document.write("<h2>Lista de estudantes:</h2>");
    document.write("<ul>");
    estudantes.forEach((nome) => {
      document.write(`<li>${nome}</li>`);
    });
    document.write("</ul>");
  }
  
  inicio();
