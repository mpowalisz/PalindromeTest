
function palindromeTest() {
  let string = document.getElementById("palindrome").value
  console.log(string);
  document.getElementById("input").innerHTML = "Is " + string + " a palindrome?"
	let newPhrase = string.toLowerCase().replace(/\W/g, '')
	let reversedPhrase = newPhrase.split("").reverse().join("");
  let y = (newPhrase === reversedPhrase)? "Yes" : "No";
  document.getElementById("result").innerHTML = y;
}
