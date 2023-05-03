function add() {
	const firstNumber = parseFloat(prompt("Enter the first number: "));
	const secondNumber = parseFloat(prompt("Enter the second number: "));
	const result = firstNumber + secondNumber;
	alert("The result is: " + result);
}

function subtract() {
	const firstNumber = parseFloat(prompt("Enter the first number: "));
	const secondNumber = parseFloat(prompt("Enter the second number: "));
	const result = firstNumber - secondNumber;
	alert("The result is: " + result);
}

function multiply() {
	const firstNumber = parseFloat(prompt("Enter the first number: "));
	const secondNumber = parseFloat(prompt("Enter the second number: "));
	const result = firstNumber * secondNumber;
	alert("The result is: " + result);
}

function divide() {
	const firstNumber = parseFloat(prompt("Enter the first number: "));
	const secondNumber = parseFloat(prompt("Enter the second number: "));
	const result = firstNumber / secondNumber;
	alert("The result is: " + result);
}

function calculateSimpleInterest() {
	const principal = parseFloat(prompt("Enter the initial balance (RM):"));
	const interestRate = parseFloat(prompt("Enter the interest rate (%):")) / 100;
	const years = parseFloat(prompt("Enter the investment duration (years):"));

	const interest = principal * interestRate * years;

	alert(`After ${years} years, the total simple interest on an initial balance of RM${principal} with an interest rate of ${interestRate * 100}% will be RM${interest.toFixed(2)}.`);
}

function calculateCompoundInterest() {
	const principal = parseFloat(prompt("Enter the principal amount: "));
	const rate = parseFloat(prompt("Enter the annual interest rate: "));
	const time = parseFloat(prompt("Enter the time period in years: "));

	const interest = principal * (Math.pow((1 + rate / 100), time));
	const totalAmount = principal + interest;

	alert(`Total amount after ${time} years is RM${totalAmount.toFixed(2)}`);
}