'use strict';

const inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {

	let request = new XMLHttpRequest();
	// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

	// request.open(method, url, async, login, password);
	request.open('GET', './current.json');
	request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
	request.send();

	// status
	// statusText - OK or Not found
	// responsText - response content
	// response
	// readyState - 0, 1, 2, 3, 4
	// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

	request.addEventListener('readystatechange', () => {
		if (request.readyState == 4 && request.status == 200) {
			let data = JSON.parse(request.response);

			if (!isNaN(inputRub.value)) {
				inputUsd.value = inputRub.value / data.usd;
			} else {
				inputRub.value = '';
				alert('Введите сумму числами.');
			}
		} else {
			inputUsd.value = 'Попробуйте ещё раз.';
		}
	});
});