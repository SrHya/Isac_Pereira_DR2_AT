// Solicitando o preço do litro do álcool, da gasolina e o valor para abastecer
const precoAlcool = prompt("Digite o preço do litro do álcool:");
const precoGasolina = prompt("Digite o preço do litro da gasolina:");
const valorAbastecer = prompt("Digite o valor que deseja abastecer:");

// Calculando a vantagem entre álcool e gasolina
// Fórmula: vantagem = preço do álcool / preço da gasolina
const vantagem = precoAlcool / precoGasolina;

let combustivelEscolhido;
let litros;

// Verificando qual combustível é mais vantajoso
if (vantagem < 0.7) {
  combustivelEscolhido = "álcool";
  litros = valorAbastecer / precoAlcool;
} else {
  combustivelEscolhido = "gasolina";
  litros = valorAbastecer / precoGasolina;
}

// Exibindo o combustível mais vantajoso e a quantidade de litros
alert(
  `Use ${combustivelEscolhido}, você abastecerá ${litros.toFixed(2)} litros.`
);
