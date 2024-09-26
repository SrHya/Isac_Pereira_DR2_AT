// Solicitando a categoria da carteira de motorista
const categoria = prompt(
  "Digite a categoria da sua carteira de motorista (A, B, C, D ou E):"
);

// Verificando a categoria e determinando quais veículos podem ser conduzidos
let mensagem;

switch (categoria) {
  case "A":
    mensagem = "Você pode conduzir motos e triciclos.";
    break;
  case "B":
    mensagem = "Você pode conduzir carros de passeio.";
    break;
  case "C":
    mensagem = "Você pode conduzir veículos de carga acima de 3,5 toneladas.";
    break;
  case "D":
    mensagem = "Você pode conduzir veículos com mais de 8 passageiros.";
    break;
  case "E":
    mensagem =
      "Você pode conduzir veículos com unidade acoplada acima de 6 toneladas.";
    break;
  default:
    mensagem = "Categoria inválida. Por favor, digite A, B, C, D ou E.";
}

// Exibindo a mensagem correspondente
alert(mensagem);
