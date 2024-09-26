// Solicitando o valor da conta do restaurante
const valorConta = prompt("Digite o valor da conta do restaurante:");

// Calculando a gorjeta de 10% sobre o valor da conta
const gorjeta = valorConta * 0.1;

// Calculando o valor total a ser pago (conta + gorjeta)
// Fórmula: total = valor da conta + gorjeta
const valorTotal = parseFloat(valorConta) + gorjeta;

// Exibindo o valor total a ser pago
alert(`O valor total a ser pago é R$ ${valorTotal.toFixed(2)}`);
