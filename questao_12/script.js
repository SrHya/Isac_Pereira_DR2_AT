// Solicitando a categoria do usuário
const categoria = prompt(
  "Digite a sua categoria (Criança, Adolescente, Jovem, Adulto ou Idoso):"
);

// Verificando a categoria e determinando a faixa etária
let faixaEtaria;

switch (categoria) {
  case "Criança":
    faixaEtaria = "0 - 12 anos";
    break;
  case "Adolescente":
    faixaEtaria = "13 - 18 anos";
    break;
  case "Jovem":
    faixaEtaria = "19 - 35 anos";
    break;
  case "Adulto":
    faixaEtaria = "36 - 59 anos";
    break;
  case "Idoso":
    faixaEtaria = "60 anos ou mais";
    break;
  default:
    faixaEtaria =
      "Categoria inválida. Por favor, digite Criança, Adolescente, Jovem, Adulto ou Idoso.";
}

// Exibindo a faixa etária correspondente
alert(faixaEtaria);
