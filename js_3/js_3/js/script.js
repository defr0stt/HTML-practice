// до цього тільки коментарі
"use strict" // для використання нових функцій

function showMessage() {
	console.log("Message is printing...");
}
showMessage();

// при вказанні значень в аргуметах - це значення за замовчуванням
// воно буде присвоєно, якщо аргументи не передались
function caclSum(argOne = 0, argTwo = 0) {
	console.log("-- caclSum function --")
	let sum = argOne + argTwo;
	console.log(`argOne = ${argOne}\nargTwo = ${argTwo}`);
	console.log("Sum = " + (argOne + argTwo));
	return sum;
}

function showArgs(argOne = 0, argTwo = 0, argThree = 0){
	console.log(`argOne = ${argOne}\nargTwo = ${argOne}
argThree = ${argThree}`);
	let res1 = caclSum(argOne, argTwo);
	let finResult = caclSum(res1, argThree);
	return finResult;
}

showArgs(1,7,15);

let funcSimpleValue = showMessage;
funcSimpleValue();

// схоже до лямбда-виразів
let getMessage = (text, name) => text + ", " + name + '!';
console.log(getMessage("Hello","Dima"));
/*
теж саме, але на деілька стрічок
let getMessage = (text, name) {
	return text + ", " + name + '!';
}
*/

/*
	setTimeout - виклик ф-ції 1 раз через певний час
	setInterval - виклик ф-ції необмежену к-сть разів через певний час
*/

setTimeout(showMessage,1000);
let timeId = setInterval(showMessage,1000);
//clearInterval(timeId); - зупиняє інтервал
clearInterval(timeId);