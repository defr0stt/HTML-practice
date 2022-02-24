// до цього тільки коментарі
"use strict" // для використання нових функцій

// змінні
let nameValue = 'Dima';
console.log(nameValue);

// константи
const PI_NUMBER = 3.141596;
const sumOfTwoNumbers = 20 + 5;

console.log("Type of nameValue = " + (typeof nameValue) +
	"; Value = " + nameValue);

let divisionOfTwoNumbers = 20/4;
divisionOfTwoNumbers = String(divisionOfTwoNumbers);
console.log("Type of divisionOfTwoNumbers = " + 
	(typeof divisionOfTwoNumbers) + "; Value = " + divisionOfTwoNumbers);

divisionOfTwoNumbers = sumOfTwoNumbers;

console.log("number == string; result -> " +
 (sumOfTwoNumbers == divisionOfTwoNumbers));


console.log("number === string; result -> " +
 (sumOfTwoNumbers == divisionOfTwoNumbers));

if(""){
	console.log("if with 0 symbols");
} else {
	console.log("else with 0 symbols");
}

if(" "){
	console.log("if with 1 symbol");
}

// тернарний оператор
console.log(((5>10) ? "5 > 10" : "5 < 10"));

let a = 1;
while(a != 5){
	console.log("a Value = " + (++a));
}

for(let i=0;i<5;i++){
	console.log(`i Value = ${i}`);
	if(i==2){
		console.log("break");
		break;
	}
}