// до цього тільки коментарі
"use strict" // для використання нових функцій

// діалогове вікно з повідомленням
alert("Hello");

// вікно з підтвердженням
// та передачею параметрів
let answerString = "Do u know something about Aztecs?";
const answerConfirm = confirm(answerString);
console.log(`Answer on confirm : ${answerConfirm}`);

//введення певного тексту в поле
let promptString = "Real Madrid or Barcelona?";
const answerPrompt = prompt(promptString);
console.log(`Answer on prompt : ${answerPrompt}`);

//DOM
//інформація про вміст тих чи інших елементів
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

//усі елементи, які містяться в body
const childNodes1 = bodyElement.childNodes;
console.log(childNodes1);

//саме рвзновид тегів у body
const childNodes2 = bodyElement.children;
console.log(childNodes2);

//-------------------------------------------------

//пошук за селектором класу
const selectorClassCount = document.querySelectorAll(".yellow");
console.log(selectorClassCount);

//пошук за селектором тега
const selectorTagCount = document.querySelectorAll("script");
console.log(selectorTagCount);

//пошук змішано за селектором тега та класу
const selectorTagClassCount = document.querySelectorAll("span.yellow");
console.log(selectorTagClassCount);

//пошук змішано за id
const idCount = document.querySelectorAll("#uniqueID");
console.log(idCount);

//пошук всередині document по id
//в результаті отримуємо об'єкт
const elem1 = document.getElementById('uniqueID');
console.log(elem1);

const elem2 = document.getElementsByTagName('h1');
console.log(elem2);

const elem3 = document.getElementsByClassName('yellow');
console.log(elem3);

/*
	getElementsBy... - жива колекція(при зміні файлу змінюється й вона)
	querySelectorAll - статична колекція(отримання даних на момент діставання інформації з документу)
*/

//matches - перевірка для конкретного класу, чи є у нього певний вказаний артибут

/*---------------------------------------*/
//отримання актуальних даних з HTML
const textElement = document.querySelector('.yellow');

const textElementContent1 = textElement.innerHTML;
console.log(textElementContent1);
let text = "Example of changing";

textElement.innerHTML = 
`<p>${text}</p>`;

//відмінність в тому, що отримує об'єкт
const textElementContent2 = textElement.outerHTML;
console.log(textElementContent2);

/*
textElement.outerHTML = 
`<p>Lol</p>`;
console.log(textElementContent2);
*/

//запис текстоаих даних безпечним способом
const textElementContent3 = textElement.textContent;
console.log(textElementContent3);
textElement.textContent = "Visualised only text";
console.log(textElement);

/*---------------------------------------*/

//створення тегів
const newElem1 = document.createElement('div');
console.log(newElem1);

newElem1.innerHTML = 
`<p>So, it's <span class="yellow">something</span> like a new data.</p>`;

//відповідно до або перед вказаним елементом
textElement.before(newElem1);
textElement.after(newElem1);

//в середину об'єкта відповідно до і після
/*textElement.append(newElem1);
textElement.prepend(newElem1);*/

console.log(document.body);