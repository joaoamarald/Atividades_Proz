// Gerar um número aleatório entre 1 e 10
let numeroCorreto = Math.floor(Math.random() * 10) + 1;

while (true) {
    // Pedir ao usuário para adivinhar o número
    let tentativa = prompt("Tente adivinhar um número entre 1 e 10:");

    // Converter a entrada para número
    tentativa = parseInt(tentativa);

    // Verificar se a entrada é um número válido
    if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
        alert("Por favor, insira um número válido entre 1 e 10.");
        continue; // Solicitar nova tentativa
    }

    // Verificar se acertou
    if (tentativa === numeroCorreto) {
        alert("Você acertou! O número era " + numeroCorreto);
        break; // Sai do loop quando o usuário acerta
    } else if (tentativa < numeroCorreto) {
        alert("O número é maior. Tente novamente!");
    } else {
        alert("O número é menor. Tente novamente!");
    }
}