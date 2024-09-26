function calcularIMC() {
  // Lê os valores dos inputs
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // Verifica se os valores são válidos
  if (!peso || !altura || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  // Calcula o IMC
  const imc = peso / (altura * altura);

  // Exibe o resultado em uma caixa de alerta
  alert(`Seu IMC é: ${imc.toFixed(2)}`);
}
