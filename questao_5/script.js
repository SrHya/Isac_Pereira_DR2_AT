// Solicitando a quantidade de doces fabricados e a capacidade da caixa
const quantidadeDoces = prompt("Digite a quantidade de doces fabricados:");
const capacidadeCaixa = prompt("Digite a capacidade da caixa:");

// Calculando a quantidade de caixas completas
// Fórmula: caixas = Math.floor(quantidade de doces / capacidade da caixa)
const caixasCompletas = Math.floor(quantidadeDoces / capacidadeCaixa);

// Exibindo a quantidade de caixas completas
alert(`Você precisará de ${caixasCompletas} caixas completas.`);
