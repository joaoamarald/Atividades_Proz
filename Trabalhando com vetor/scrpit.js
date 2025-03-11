// Função para gerar um número aleatório entre min e max
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar um array de 10 números aleatórios
function gerarArrayAleatorio(tamanho, min, max) {
    let array = [];
    for (let i = 0; i < tamanho; i++) {
        array.push(gerarNumeroAleatorio(min, max));
    }
    return array;
}

// Função para ordenar um array de forma crescente (Bubble Sort)
function ordenarCrescente(array) {
    let arr = [...array]; // Criar uma cópia do array original
    let tamanho = arr.length;
    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca os elementos de posição
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Função para ordenar um array de forma decrescente
function ordenarDecrescente(array) {
    let arr = ordenarCrescente(array); // Ordena primeiro em ordem crescente
    let decrescente = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        decrescente.push(arr[i]);
    }
    return decrescente;
}

// Função para verificar se um número é primo
function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Função para separar números pares, ímpares e primos
function separarNumeros(array) {
    let pares = [], impares = [], primos = [];
    for (let num of array) {
        if (num % 2 === 0) pares.push(num);
        else impares.push(num);

        if (ehPrimo(num)) primos.push(num);
    }
    return { pares, impares, primos };
}

// Gerar o array aleatório
let numeros = gerarArrayAleatorio(10, 1, 100);
console.log("Array gerado:", numeros);

// Ordenação crescente e decrescente
let crescente = ordenarCrescente(numeros);
let decrescente = ordenarDecrescente(numeros);

console.log("Ordem crescente:", crescente);
console.log("Ordem decrescente:", decrescente);

// Separar pares, ímpares e primos
let { pares, impares, primos } = separarNumeros(numeros);

console.log("Números pares:", pares);
console.log("Números ímpares:", impares);
console.log("Números primos:", primos);
