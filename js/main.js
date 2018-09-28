/*----- constants -----*/


/*----- app's state (variables) -----*/
var plus;
var minus;

var result;
var blank;
var num = parseInt(counter); //num that user inputs
var sum = 1;
var deduct = 1;

/*----- cached element references -----*/

var result = document.getElementById('result');

var counter = document.getElementById('blank'); //where user input
var plusBtn = document.getElementById('plus');
var minusBtn = document.getElementById('minus');


/*----- event listeners -----*/

plusBtn.addEventListener("click", function (e) {
    sum += parseInt(counter.value);
    result.textContent = sum;
});


minusBtn.addEventListener("click", function (e) {
    deduct - parseInt(counter.value);
    result.textContent = deduct;
});


/*----- functions -----*/

function init() {
    num = 0;
};


