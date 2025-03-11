// Funções matemáticas
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero não é permitida.";
    }
    return a / b;
}

// Função principal
function calcular() {
    // Solicita os números ao usuário
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let operacao = prompt("Digite a operação desejada (+, -, *, /):");

    let resultado;
    
    // Verifica a operação e chama a função correspondente
    switch (operacao) {
        case "+":
            resultado = soma(num1, num2);
            break;
        case "-":
            resultado = subtracao(num1, num2);
            break;
        case "*":
            resultado = multiplicacao(num1, num2);
            break;
        case "/":
            resultado = divisao(num1, num2);
            break;
        default:
            resultado = "Operação inválida!";
    }

    // Exibe o resultado no console
    console.log(`Resultado: ${resultado}`);
}

// Chama a função para iniciar o programa
calcular();
