// Solicitando a renda mensal e os gastos em cada categoria
const renda = parseFloat(prompt("Digite a renda mensal:"));
const moradia = parseFloat(prompt("Digite o gasto com moradia:"));
const educacao = parseFloat(prompt("Digite o gasto com educação:"));
const transporte = parseFloat(prompt("Digite o gasto com transporte:"));

// Calculando os percentuais de cada categoria
const percentualMoradia = Math.round((moradia / renda) * 100);
const percentualEducacao = Math.round((educacao / renda) * 100);
const percentualTransporte = Math.round((transporte / renda) * 100);

// Avaliando se os gastos estão dentro da faixa recomendada
const avaliacaoMoradia =
  percentualMoradia <= 30
    ? "dentro da faixa recomendada"
    : "fora da faixa recomendada";
const avaliacaoEducacao =
  percentualEducacao <= 20
    ? "dentro da faixa recomendada"
    : "fora da faixa recomendada";
const avaliacaoTransporte =
  percentualTransporte <= 15
    ? "dentro da faixa recomendada"
    : "fora da faixa recomendada";

// Exibindo o diagnóstico financeiro
alert(
  `Moradia: ${percentualMoradia}% (${avaliacaoMoradia})\nEducação: ${percentualEducacao}% (${avaliacaoEducacao})\nTransporte: ${percentualTransporte}% (${avaliacaoTransporte})`
);
