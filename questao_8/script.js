// Solicitando dois números inteiros e o tipo de ordenação (crescente ou decrescente)
const num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
const num2 = parseInt(prompt("Digite o segundo número inteiro:"));
const ordenacao = prompt("Digite a ordenação (crescente ou decrescente):");

// Variável para armazenar o resultado da ordenação
let resultado;

// Usando switch para determinar a ordenação
switch (ordenacao) {
  case "crescente":
    if (num1 < num2) {
      resultado = `${num1} ${num2}`;
    } else {
      resultado = `${num2} ${num1}`;
    }
    break;
  case "decrescente":
    if (num1 > num2) {
      resultado = `${num1} ${num2}`;
    } else {
      resultado = `${num2} ${num1}`;
    }
    break;
  default:
    resultado = "Opção de ordenação inválida!";
    break;
}

// Exibindo os números na ordem escolhida
alert(resultado);
