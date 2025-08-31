console.log("Script loaded successfully!");

// Objetivo: Criar uma aplicação que permita cadastrar várias despesas e
// gerar um resumo dos gastos.

// Requisitos:

// • Permitir cadastrar uma despesa com categoria (ex.: alimentação, transporte) e valor.
let category = prompt("Digite a categoria da despesa:");
let value = Number(prompt("Digite o valor da despesa:"));

// • Não permitir valores negativos.
while (value < 0) {
    value = Number(prompt("Valor inválido! Digite um valor positivo para a despesa:"));
}

// • Armazenar todas as despesas em uma matriz.
const expenses = [];

function expenseRegister(category, value) {
    expenses.push([category, value]);
    // • Exibir no console:
    console.log(`Despesas cadastradas: ${category} - R$${value.toFixed(2).replace('.', ',')}`);
};

expenseRegister(category, value);


// • Lista de todas as despesas cadastradas.
function showExpenses() {
    console.log("Lista de todas as despesas cadastradas:");
    for (let i = 0; i < expenses.length; i++) {
        console.log(`${i + 1}. Categoria: ${expenses[i][0]}, Valor: R$${expenses[i][1].toFixed(2).replace('.', ',')}`);
    };
    // expenses.forEach((expense, index) => {
    //     console.log(`${index + 1}. Categoria: ${expense[0]}, Valor: R$${expense[1].toFixed(2).replace('.', ',')}`);
    // });
};

showExpenses();

// • Valor total gasto.
// • Valor médio das despesas.
// • Maior despesa cadastrada.
// • Disponibilizar um menu interativo (via prompt)
// com opções para cadastrar, ver resumo, limpar despesas e sair.

// Calculadora de Despesas Pessoais

// Conceitos usados:

// • Variáveis e constantes para armazenar valores.
// • Condicionais para validar entradas (ex.: gasto não pode ser negativo).
// • Estruturas de repetição para inserir vários gastos.
// • Arrays/matrizes para armazenar categorias de despesas.

// Extra: mostrar total, média e maior gasto.