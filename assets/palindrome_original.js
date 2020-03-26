let phrase = [
  "Not a pal",
  "Racecar",
  "Nurses Run",
  "Bear",
  "A man, a plan, a canal, Panama"
];

const palindromeTest = string => {
  // Convert string to lowercase and remove all non-alphanumeric characters
  /* Originally tried .replace(" ",""),
  but this only removed the first whitespace */
  let newPhrase = string.toLowerCase().replace(/\W/g, "");

  /* Split string into an array, reverse it,
  and join the array back to a string. */
  let reversedPhrase = newPhrase
    .split("")
    .reverse()
    .join("");

  /* Compare original newPhrase to reversedPhrase to determine
  if it is a palindrome */
  return newPhrase === reversedPhrase ? "true" : "false";

  //Ternary could also be written as
  /* if (newPhrase === reversedPhrase) {
			return true;
		else {
			return false;
		}
	}
	*/
};

for (let i = 0; i < phrase.length; i++) {
  console.log(palindromeTest(phrase[i]));
}
