// Solicitando três números inteiros do usuário
const num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
const num2 = parseInt(prompt("Digite o segundo número inteiro:"));
const num3 = parseInt(prompt("Digite o terceiro número inteiro:"));

// Inicializando as variáveis para maior e menor
let maior = num1;
let menor = num1;

// Verificando qual é o maior e qual é o menor
if (num2 > maior) {
  maior = num2;
}
if (num3 > maior) {
  maior = num3;
}

if (num2 < menor) {
  menor = num2;
}
if (num3 < menor) {
  menor = num3;
}

// Exibindo o maior e o menor número
alert(`Maior: ${maior} | Menor: ${menor}`);
