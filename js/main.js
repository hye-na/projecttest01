/*----- constants -----*/


/*----- app's state (variables) -----*/
var plus;
var minus;

var result;
var blank;
var num = parseInt(counter); //num that user inputs
var sum = 0;
var deduct = 0;

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
    deduct -= parseInt(counter.value);
    result.textContent = deduct;
});

// plusBtn.style

// minusBtn.style.
/*----- functions -----*/

function init() {
    num = 0;
};


