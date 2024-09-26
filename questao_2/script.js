// Solicitando a medida em centímetros do usuário
const medidaCm = prompt("Digite a medida em centímetros:");

// Convertendo a medida de centímetros para metros
// Fórmula: metros = centímetros / 100
const medidaM = medidaCm / 100;

// Exibindo o resultado no console
console.log(`${medidaCm} cm é igual a ${medidaM} m`);
