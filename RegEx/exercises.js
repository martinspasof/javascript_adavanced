// 1. Write a JS program to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9).
function is_allowed_specific_char(string){
	let res1 = string.match(/[a-zA-Z0-9]/g);
	let flag = false;
	if (res1) {
		flag = true;
	}
	return flag;
}

console.log("1. Write a JS program to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9)");
console.log(is_allowed_specific_char("ABCDEFabcdef123450"));
console.log(is_allowed_specific_char("*&%@#!}{"));
console.log("----------------------------------------------------\n");

// 2. Write a JS program that matches a string that has an a followed by zero or more b's
function text_match(string, reg){
	let res1 = string.match(reg);
	let msg = 'Not matched!';
	if (res1) {
		msg = 'Found a match!';
	}
	return msg;
}

let reg = /^a(b*)$/g;
console.log("2. Write a JS program that matches a string that has an a followed by zero or more b's");
console.log(text_match("ac", reg));
console.log(text_match("abc", reg));
console.log(text_match("a", reg));
console.log(text_match("ab", reg));
console.log(text_match("abb", reg));
console.log("\n");

// 3. Write a JS program that matches a string that has an a followed by one or more b's
reg = /ab+/g;
console.log("3. Write a JS program that matches a string that has an a followed by one or more b's");
console.log(text_match("ab", reg));
console.log(text_match("abc", reg));
console.log("----------------------------------------------------\n");

// 4. Write a JS program that matches a string that has an a followed by zero or one 'b'.
reg = /ab?/g;
console.log("4. Write a JS program that matches a string that has an a followed by zero or one 'b");
console.log(text_match("ab", reg));
console.log(text_match("abc", reg));
console.log(text_match("abbc", reg));
console.log(text_match("aabbc", reg));
console.log("----------------------------------------------------\n");

// 5. Write a JS program that matches a string that has an a followed by three 'b'
reg = /ab{3}/g;
console.log("5. Write a JS program that matches a string that has an a followed by three 'b'");
console.log(text_match("abbb", reg));
console.log(text_match("aabbbbbc", reg));
console.log("----------------------------------------------------\n");

// 6. Write a JS program that matches a string that has an a followed by two to three 'b'
reg = /ab{2,3}/;
console.log("6. Write a JS program that matches a string that has an a followed by two to three 'b'");
console.log(text_match("ab", reg));
console.log(text_match("aabbbbbc", reg));
console.log("----------------------------------------------------\n");

// 7. Write a JS program to find sequences of lowercase letters joined with a underscore.
reg = /^[a-z]+_[a-z]+$/;
console.log("7. Write a JS program to find sequences of lowercase letters joined with a underscore.");
console.log(text_match("aab_cbbbc", reg));
console.log(text_match("aab_Abbbc", reg));
console.log(text_match("Aaab_abbbc", reg));
console.log("----------------------------------------------------\n");

// 8. Write a JS program to find the sequences of one upper case letter followed by lower case letters.
reg = /[A-Z]+[a-z]+$/;
console.log("8. Write a JS program to find the sequences of one upper case letter followed by lower case letters.");
console.log(text_match("AaBbGg", reg));
console.log(text_match("Python", reg));
console.log(text_match("python", reg));
console.log(text_match("PYTHON", reg));
console.log(text_match("aA", reg));
console.log(text_match("Aa", reg));
console.log("----------------------------------------------------\n");

// 9. Write a JS program that matches a string that has an 'a' followed by anything, ending in 'b'.
// reg = /a.+b$/;
reg = /a.*?b$/;
console.log("9. Write a JS program that matches a string that has an 'a' followed by anything, ending in 'b'.");
console.log(text_match("aabbbbd", reg));
console.log(text_match("aabAbbbc", reg));
console.log(text_match("accddbbjjjbb", reg));
console.log("----------------------------------------------------\n");

// 10. Write a JS program that matches a word at the beginning of a string.
reg = /^\w+/;
console.log("10. Write a JS program that matches a word at the beginning of a string.");
console.log(text_match("The quick brown fox jumps over the lazy dog.", reg));
console.log(text_match(" The quick brown fox jumps over the lazy dog.", reg));
console.log("----------------------------------------------------\n");

// 11. Write a JS program that matches a word at the end of string, with optional punctuation.
// reg = /\w+\.$/;
// reg = /\w+\.S*$/;
reg = /\w+\S*$/;
console.log("11. Write a JS program that matches a word at the end of string, with optional punctuation.");
console.log(text_match("The quick brown fox jumps over the lazy dog.", reg));
console.log(text_match("The quick brown fox jumps over the lazy dog. ", reg));
console.log(text_match(" The quick brown fox jumps over the lazy dog ", reg));
console.log("----------------------------------------------------\n");