"use strict";

/////Завдання 4 while !!///

/*
let count = 4;
let a = false;

while (count > 0 && !a) {
	let password = prompt("Введіть пароль:");

	if (password == 4) {
		a = 4;
		document.write(`<h1>Ласкаво просимо на сайт</h1>`);
	} else {
		count--;
		if (count > 0) {
			prompt(`Невірний пароль. Залишилось ${count} спроби.`);
		} else {
			prompt("Будь ласка, спробуйте пізніше!");
		}
	}
}
 */


///////Завдання 4/1  while  !!!!

/*
let n = +prompt(`Введіть число`);
let i = 1;
while (1 < n) {
	i = i * n;
	n--;
	document.write(`<h1>${i}</h1>`);
}
*/


///////Завдання 4/2  while  !!!!

/*
let count =-100;
while (count<=100) {
	document.write(`<h2>Loop ${count}</h2>`);
	count+=10;
}
*/


///////Завдання 4/3  while  !!!!

/*
let count=1;
while (count<=2*55) {
document.write(`<h2>Loup ${count}</h2>`);
count+=2;
}
 */


///////Завдання 4/4  while  !!!!

/*
let count = 90;
while (count>=0) {
	document.write(`<h2>Loop ${count}</h2>`);
	count-=5;
}
*/


///////Завдання 4/5  while  !!!!

/*
let count=2;
while (count<=2**20) {
	document.write(`<h3>Loop ${count}<h3>`);
	count=count*2
}
 */


///////Завдання 4/6  while  !!!!

/*
let a=2;
while (a<=10000) {
	document.write(`<h3>Loop ${a}<h3>`);
	a=2*a-1;
}
 */


///////Завдання 4/7  while  !!!!

/*
let a=-166;
	while (a<=99) {
	 if (a >= -99) {
			document.write(`<h1>${a}</h1>`);
		}
		a = 2 * a + 200;
	}
*/


///////Завдання 4/8  while  ( + ** ) !!!!

/*
let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть степінь`);
let result = 1;
let i=0;
while (i<b) {
	result = result * a;
	i++;
}
document.write(`<h1>${result}</h1>`);
*/

///////Завдання 4/8  while  ( - ** ) !!!!

/*
let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть від'ємний степінь`);
function power(a, b) {
	let result = 1;
	let i = 0;
	while (i > b) {
		result *= a;
		i--;
	}
	return 1 / result;
}
let result = power(a, b);
document.write(`<h1>${result}</h1>`);
*/
