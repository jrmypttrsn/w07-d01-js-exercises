function sayHi() {
  alert("Hello, stranger!");
}

function shoutyHello() {
	var name = prompt("What is your name?");
	alert("HELLO, " + name.toUpperCase() + "!");
}

function evenOrOdd() {
	var num = prompt("Give me a number, please.");
	if (num%2 === 0) {
	 alert(num + " is an even number.");
	}
	else if (num%2 === 1) {
		alert(num + " is an odd number.");
	}
	else {
		alert("That is not a number")
	}
}

function numberPrompter() {
	var num = prompt("Give me an even number between 3 and 11");
	if (num%2 === 0 && num > 3 && num < 11) {
		alert("Congratulations! Celebrate with this alert, chump!");
	}
	else if (num%2 === 1) {
		alert("Try again, Einstein.");
	}
	else {
		alert("That's not even a number!")
	}
}

function wordReverser() {
	var word = prompt("Give me a word or else!");
	alert(word.split('').reverse().join(''));	
}