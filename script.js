function firstChar(text) {
	let trimmed = text.trim();
	return trimmed.charAt(0);
  // your code here
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
