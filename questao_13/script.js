// Função que retorna o tempo atual no formato hora:minuto:segundo
function getHoraMinutoSegundo() {
  const agora = new Date(); // Obtém a data e hora atual
  const horas = String(agora.getHours()).padStart(2, "0"); // Obtém as horas, garantindo 2 dígitos
  const minutos = String(agora.getMinutes()).padStart(2, "0"); // Obtém os minutos, garantindo 2 dígitos
  const segundos = String(agora.getSeconds()).padStart(2, "0"); // Obtém os segundos, garantindo 2 dígitos

  return `${horas}:${minutos}:${segundos}`; // Retorna o horário no formato desejado
}

// Exibindo o tempo atual no formato hora:minuto:segundo
alert(getHoraMinutoSegundo());
