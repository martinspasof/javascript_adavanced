let text = `A common mistake that people make when trying to design something completely foolproof
is to underestimate the ingenuity of complete fools.`;

let splitText = text.split(' ');

//words that starts with letter 't' and are longer than 2 symbols
let getWords = splitText.filter(word => word[0] === 't').filter(word => word.length > 2);

console.log(getWords.join("\n"));