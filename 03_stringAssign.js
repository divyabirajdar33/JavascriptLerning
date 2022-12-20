function squareOfWordLength(){
var value = "Javascript";
console.log("1.1)  Lenght of word Javascript is:-", value.length, "and its square is:-",value.length * value.length);

var value = "Google Chrome";
console.log(" \n1.2)  Lenght of word Google chrome is:-", value.length, "and its square is:-",value.length * value.length);

var value = "Developer Smart";
console.log(" \n1.3)  Lenght of word Developer Smart is:-", value.length, "and its square is:-",value.length * value.length);  
 } 
squareOfWordLength();

var sentence = "I am Angular Developer";
var wordsInSentence =  sentence.split(" ");
console.log("\n2.1)  Length of string is:-",sentence.length,"Total words in sentence string is:-",wordsInSentence.length);

 var result = sentence.length / wordsInSentence.length;
console.log(`      After divding length by total numbers of words is:- ${result}`);
var result = sentence.length * wordsInSentence.length;
console.log(`\n2.2)  Multiplying string length with total is:- ${result}`);