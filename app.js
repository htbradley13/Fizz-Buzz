$(document).ready(function() {
	for (var startGame = 1; startGame <= 100; startGame++) {

	if (startGame % 3 === 0) {
		if (startGame % 5 === 0) {
			document.write("Fizz Buzz" + "<br>");
		}
		else (document.write("Fizz" + "<br>"))
	}
	else if (startGame % 5 === 0) {
		if (startGame % 3 != 0) {
			document.write("Buzz" + "<br>");
		}
	}
	else if (startGame % 5 != 0) {
		if (startGame % 3 != 0) {
			document.write(startGame + "<br>");
		}
	}
	
	}
});  
//done 