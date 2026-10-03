let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
  console.log(`Valor total de los gastos: ${totalExpensesValue}`);
}
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}
console.log(calculateAverageExpense());

function updateBalanceColor() {
  let balance = budgetValue - totalExpensesValue;
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance >= 0 && balance < budgetValue / 4) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (category == expenseEntries[i][0]) {
      total += expenseEntries[i][1];
    }
  }
  console.log(total);
  console.log(category);
  return total;
}
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  const categoriesData = [];

  for (const category of categories) {
    const total = calculateCategoryExpenses(category);
    categoriesData.push([category, total]);
  }

  let largestCategory = "";
  let highestTotal = 0;

  for (const [category, total] of categoriesData) {
    if (total > highestTotal) {
      highestTotal = total;
      largestCategory = category;
    }
  }
  return largestCategory;
}
function addExpenseEntry(newExpense) {
  expenseEntries.push(newExpense);
  totalExpensesValue += newExpense[1];
}
