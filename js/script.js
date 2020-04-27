'use strict';

let inputUAN = document.getElementById('UAN'),
    inputUSD = document.getElementById('USD');

inputUAN.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
                if (request.readyState === 4) {
                    if (request.status == 200 && !isNaN(inputUAN.value)) {
                        resolve(this.response)
                    } else {
                        reject();

                    }
                }
            }
        });
    };

    catchData()
        .then(response => {
            let data = JSON.parse(response);
            inputUSD.value = inputUAN.value / data.usd;
        })
        .catch(() => {
            inputUSD.value = "Что-то пошло не так";
            alert('Enter number');
            inputUAN.value = inputUAN.value.slice(0, -1);
        });


});