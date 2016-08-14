$(document).ready(function() {
	for (var startGame = 1; startGame <= 100; startGame++) {

	if (startGame % 3 === 0 && startGame % 5 === 0) {
			document.write("Fizz Buzz" + "<br>");
		}
	else if(startGame % 3 === 0 && startGame % 5 != 0) {
		document.write("Fizz" + "<br>");
	}
	else if(startGame % 5 === 0 && startGame % 3 != 0) {
		document.write("Buzz" + "<br>");
	}
	else {
			document.write(startGame + "<br>");
		}
	}
});  
//done 