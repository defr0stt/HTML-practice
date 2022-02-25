// до цього тільки коментарі
"use strict" // для використання нових функцій

// приклади створення об'єктів'
let exampleObject1 = new Object();
let exampleObject2 = {};

//
let exampleObject3 = {
	name: "Dima",
	age: 19,
	"3 word option" : true,
};

console.log(exampleObject3);
console.log(`Name = ${exampleObject3.name}`);
console.log(`3 word option = ${exampleObject3["3 word option"]}`);

//
function objectReturn(name, age) {
	return {
		name,
		age,
	};
}

console.log(objectReturn("Eden",17));

//додавання нових особливостей
exampleObject3.country = "Ukraine";
console.log(exampleObject3);

exampleObject3.country = {
	city: "Vinnitsia",
};
console.log(exampleObject3);

//видалення особливостей
delete exampleObject3["3 word option"];
console.log(exampleObject3);

//копіювання, додавання об'єктів
let exampleObject4 = Object.assign({},exampleObject3);
console.log(exampleObject4);

Object.assign(exampleObject4,{additional1: true,additional2: false});
console.log(exampleObject4);

// ?. - перевіряє, чи існують подальші елементи об'єкта
console.log(exampleObject3?.country?.city);

// in - перевіряяє, чи є елементу в об'єкті
if("country" in exampleObject3){
	console.log("option 'country' exists in exampleObject3");
}

// for-in
for(let key in exampleObject3){
	console.log(`${key} = ${exampleObject3[key]}`);
}

// функції конструктор = шаблон об'єкта
function ExampleConstructor(name, age){
	this.name = name;
	this.age = age;
}

console.log(new ExampleConstructor("Dima",19));
console.log(new ExampleConstructor("Zack",20));