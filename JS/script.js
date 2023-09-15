"use strict";


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
