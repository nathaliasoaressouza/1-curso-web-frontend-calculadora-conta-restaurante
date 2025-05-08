// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Insira o numero de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Insira o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.questionInt('Insira o metodo de pagamento (1- PIX, 2- dinheiro, 3- cartao): ');

//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
let valorFinal = valorTotal;
if (metodoPagamento === 1 || metodoPagamento === 2) {
    valorFinal = valorTotal * 0.9;
}

else {
    valorFinal = valorTotal;
}

const valorPorPessoa = valorFinal / numeroPessoas;

// Exibindo os resultados

console.log("Método de pagamento escolhido: " + metodoPagamento);
console.log("Valor total com desconto (se aplicável): R$ " + valorFinal.toFixed(2));
console.log("Cada pessoa deverá pagar: R$ " + valorPorPessoa.toFixed(2));