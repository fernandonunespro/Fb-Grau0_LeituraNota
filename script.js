//Programa para Leitura de Notas

function verificarNot(event){
  event.preventDefault();

  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);

  let media = (nota1 + nota2) / 2;

  if (media >= 7 && media < 10) {
    document.getElementById("resultado").value = "Aprovado";
  } 
  else if (media >= 10) {
    document.getElementById("resultado").value = "Aprovado com Distincao";
  } 
  else {
    document.getElementById("resultado").value = "Reprovado";
  }
}