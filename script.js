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