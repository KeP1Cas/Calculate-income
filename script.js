let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let vopros1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	vopros2 = prompt("Во сколько обойдется?", ''),
	vopros3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	vopros4 = prompt("Во сколько обойдется?", '');

appData.expenses.vopros1 = vopros2;
appData.expenses.vopros3 = vopros4;

alert(appData.budget / 30);