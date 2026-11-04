

function add(a, b) {return a + b }
// function sub(a, b) {return a - b }
// function mul(a, b) {return a * b }
// function div(a, b) {return a / b }

function showAnswer(){

	let a = 5;
	let b = 10;

	let result = add(a, b);

	document.getElementById("result").innerHTML = "Result : " + result;

	console.log(result);

}

showAnswer();
