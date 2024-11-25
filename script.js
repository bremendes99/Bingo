const numerosSorteados = new Set();
const todosNumerosElement = document.getElementById('todosNumeros');
const currentNumberElement = document.getElementById('currentNumber');
const ordemSorteioContainer = document.querySelector('.order-list');

// Função para gerar a lista de números de 1 a 75, divididos em colunas
function gerarNumeros() {
    for (let i = 1; i <= 75; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.id = `numero-${i}`;
        numberDiv.innerText = i;
        todosNumerosElement.appendChild(numberDiv);
    }
}

gerarNumeros();

// Função para sortear um número
function sortearNumero() {
    if (numerosSorteados.size >= 75) {
        alert("Todos os números já foram sorteados!");
        return;
    }

    let numero;
    do {
        numero = Math.floor(Math.random() * 75) + 1;
    } while (numerosSorteados.has(numero));

    numerosSorteados.add(numero);
    currentNumberElement.innerText = numero;

    // Destaca o número sorteado na lista
    const sorteadoDiv = document.getElementById(`numero-${numero}`);
    sorteadoDiv.classList.add('highlighted');

    // Adiciona o número na ordem de sorteio
    const ordemDiv = document.createElement('span');
    ordemDiv.innerText = numero;
    ordemSorteioContainer.appendChild(ordemDiv);
}
