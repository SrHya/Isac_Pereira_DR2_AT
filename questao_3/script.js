// Solicitando o preço do litro do combustível e o valor para abastecer
const precoLitro = prompt("Digite o preço do litro do combustível:");
const valorAbastecer = prompt("Digite o valor que deseja abastecer:");

// Calculando a quantidade de litros
// Fórmula: litros = valor para abastecer / preço do litro
const litros = Math.floor(valorAbastecer / precoLitro);

// Exibindo a quantidade de litros abastecidos
alert(`Você abasteceu ${litros} litros.`);
