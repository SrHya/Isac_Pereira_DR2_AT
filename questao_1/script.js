// Definindo o ano atual como uma constante
const anoAtual = 2024;

// Solicitando o nome e a idade do usuário
const nome = prompt("Digite o seu nome:");
const idade = prompt("Digite a sua idade:");

// Calculando o ano de nascimento
// Fórmula: ano de nascimento = ano atual - idade
const anoNascimento = anoAtual - idade;

// Exibindo a mensagem com o nome e o ano de nascimento do usuário
alert(`${nome}, você nasceu em ${anoNascimento}`);
