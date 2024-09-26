// Função para calcular a diferença de dias entre duas datas
function diferencaDias(data1, data2) {
  const umDia = 24 * 60 * 60 * 1000; // Número de milissegundos em um dia
  const diferenca = Math.abs(data1 - data2); // Diferença absoluta em milissegundos
  return Math.floor(diferenca / umDia); // Converte milissegundos para dias
}

// Função para criar uma nova data a partir da data atual após x dias
function novaDataAposXDias(dias) {
  const hoje = new Date(); // Data atual
  hoje.setDate(hoje.getDate() + dias); // Adiciona os dias
  return hoje; // Retorna a nova data
}

// Função para contagem regressiva em dias até uma nova data
function contagemRegressiva(dataFutura) {
  const hoje = new Date(); // Data atual
  const umDia = 24 * 60 * 60 * 1000; // Número de milissegundos em um dia
  const diferenca = Math.floor((dataFutura - hoje) / umDia); // Diferença em dias
  return diferenca >= 0 ? diferenca : 0; // Retorna 0 se a data já passou
}

// Testes
// Teste da função diferencaDias
const data1 = new Date("2024-09-30");
const data2 = new Date("2024-10-10");
console.log(`Diferença de dias: ${diferencaDias(data1, data2)} dias`); // Exibe 10

// Teste da função novaDataAposXDias
const diasParaAdicionar = 15;
const novaData = novaDataAposXDias(diasParaAdicionar);
console.log(
  `Nova data após ${diasParaAdicionar} dias: ${novaData.toLocaleDateString()}`
); // Exibe a data 15 dias à frente

// Teste da função contagemRegressiva
const dataFutura = new Date("2024-12-25");
console.log(
  `Contagem regressiva até ${dataFutura.toLocaleDateString()}: ${contagemRegressiva(
    dataFutura
  )} dias`
); // Exibe a contagem regressiva até o Natal

// Outro teste da função diferencaDias
const data3 = new Date("2025-01-01");
console.log(`Diferença de dias: ${diferencaDias(data1, data3)} dias`); // Exibe a diferença de dias entre 30 de setembro e 1 de janeiro

// Outro teste da função novaDataAposXDias
const diasParaAdicionar2 = 5;
const novaData2 = novaDataAposXDias(diasParaAdicionar2);
console.log(
  `Nova data após ${diasParaAdicionar2} dias: ${novaData2.toLocaleDateString()}`
); // Exibe a data 5 dias à frente

// Outro teste da função contagemRegressiva
const dataFutura2 = new Date("2023-09-28");
console.log(
  `Contagem regressiva até ${dataFutura2.toLocaleDateString()}: ${contagemRegressiva(
    dataFutura2
  )} dias`
); // Exibe a contagem regressiva até uma data passada
