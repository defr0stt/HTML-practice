// до цього тільки коментарі
"use strict" // для використання нових функцій

// Number.EPSILON - дуууже маленьке число для вирішення з округленням

// \u{1F60D} - UTF-32; \u00A9 - UTF-16
console.log("Example of using some characters \"Text inside\" \u{1F60D} \u00A9");

let line1 = "Linear algebra";
console.log(`line1 length = ${line1.length}
first symbol = ${line1[0]}
last symbol = ${line1[line1.length-1]}`);

//for-of
let counter = 1;
for(const char of line1){
	console.log(`${counter} = ${char}`);
	counter++;
}

// перевірка чи є елемент в масиві
console.log(line1.slice(3));
console.log(line1.includes("near"));

// arrays
let array1 = ["Dima", "Zack"];
let array2 = [
	12,
	{
		name: "Dima",
		age: 19
	},
	true,
	function lol() {
		let line = "I'm Iron Man!";
		console.log(line);
		return line;
	}
];

console.log(array2[1]);
console.log(array2);
// виклик функції з масиву
array2[3]();

//видалення
array2.splice(0,1);
console.log(array2);

//додавання
/*array2.splice(0,1,"New element");
console.log(array2);*/

// копіювання всььго масиву
let array3 = array2.slice();

// варіант додавання елементів
let array4 = array3.concat("ResOfConcat");
console.log(array4);
console.log(array4.indexOf("Dima"));

// сортування та реверс
let array5 = [15,6,12,20,1,];
// особливість як ім'я масиву
array5.name = "array5";
console.log(array5.sort((a,b)=>a-b));
console.log(array5.reverse());

//групування за ігноруванням певних елементів
let array6 = "1-st,2-nd"
let array7 = array6.split(',');
console.log(array7);

//з масиву - стрічку
console.log(array7.join(" ; "));