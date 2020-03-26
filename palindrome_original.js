let phrase = ["Not a pal","Racecar","Nurses Run","Bear","A man, a plan, a canal, Panama"]

const palindromeTest = ( string ) => {
	let newPhrase = string.toLowerCase().replace(/\W/g, '')
	let reversedPhrase = newPhrase.split("").reverse().join("");
	return (newPhrase === reversedPhrase)? "true" : "false";
	
	//Ternary could also be written as
	/* if (newPhrase === reversedPhrase) {
			return true;
		else {
			return false;
		}
	}
	*/
}

for (let i = 0; i < phrase.length; i++) {
	console.log(palindromeTest(phrase[i]))
}
