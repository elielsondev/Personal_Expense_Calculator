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
};

showExpenses();


// • Valor total gasto.
function totalExpenses() {
    let totalValue = 0;

    for (let i = 0; i < expenses.length; i++) {
        totalValue += expenses[i][1];
    };

    console.log(`Valor total gasto: R$${totalValue.toFixed(2).replace('.', ', ')}`);
};

totalExpenses();


// • Valor médio das despesas.
function averageExpense() {
    let totalValue = 0;

    for (let i = 0; i < expenses.length; i++) {
        totalValue += expenses[i][1];
    }
    let averageValue = totalValue / expenses.length;
    
    console.log(`Valor médio das despesas: R$${averageValue.toFixed(2).replace('.', ', ')}`);
};


// • Maior despesa cadastrada.
let maxExpense = 0;
function maxExpenseValue() {
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i][1] > maxExpense) {
            maxExpense = expenses[i][1];
        }
    };
    console.log(`Maior despesa cadastrada: R$${maxExpense.toFixed(2).replace('.', ', ')}`);
};

maxExpenseValue();


// • Disponibilizar um menu interativo (via prompt) com opções para: 
// cadastrar, 
// ver resumo, 
// limpar despesas 
// e sair.
let option;

do {
    option = Number(prompt(`
    Escolha uma opção:
    1. Cadastrar despesa
    2. Ver resumo
    3. Limpar despesas
    4. Sair
    `));

    switch (option) {
        case 1:
            // Cadastrar despesa
            let category = prompt("Digite a categoria da despesa:");
            let value = Number(prompt("Digite o valor da despesa:"));

            while (value < 0) {
                value = Number(prompt("Valor inválido! Digite um valor positivo para a despesa:"));
            }

            expenseRegister(category, value);
            break;

        case 2:
            // Ver resumo
            showExpenses();
            totalExpenses();
            averageExpense();
            maxExpenseValue();
            break;

        case 3:
            // Limpar despesas
            expenses = [];
            console.log("Despesas limpas com sucesso!");
            break;

        case 4:
            // Sair
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }

} while (option !== 4)

// Calculadora de Despesas Pessoais

// Conceitos usados:

// • Variáveis e constantes para armazenar valores.
// • Condicionais para validar entradas (ex.: gasto não pode ser negativo).
// • Estruturas de repetição para inserir vários gastos.
// • Arrays/matrizes para armazenar categorias de despesas.

// Extra: mostrar total, média e maior gasto.
