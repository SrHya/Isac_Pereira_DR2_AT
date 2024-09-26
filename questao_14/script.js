// Função que retorna a data atual no formato localizado
function getLocaleDate() {
  const hoje = new Date(); // Obtém a data atual
  const idioma = navigator.language; // Obtém o idioma do navegador
  return hoje.toLocaleDateString(idioma); // Retorna a data formatada de acordo com o idioma
}

// Exibindo a data localizada no console
const dataLocalizada = getLocaleDate();
console.log(dataLocalizada); // Mostra a data no formato localizado
