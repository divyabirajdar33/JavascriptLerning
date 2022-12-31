

var sentence = "I am very good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`1) Total vowels in string is : ${counter}`);


function addition(num1,num2,num3,num4,num5) {
    
    var s=num1*num1*num1+num2*num2*num2+num3*num3*num3+num4*num4*num4+num5*num5*num5
    console.log(`\n2) Sum of cube of no 1 to 5 :- ${s}`)
}
addition(1,2,3,4,5);

console.log(`\n3) Odd positioned characters from given string:- `);


function oddPositionedChars(value) {
  console.log(`\n "${value}"`);
  string1 = value.trim("Hard work always pays back ", "Soon I will be Angular IT champ");
  var oddString = "";
  for (let i = 0; i < string1.length; i++) {
    var char = string1.charAt(i);
    if (i % 2 == 1) {
      oddString = oddString + " " + char;
    }
  }
  console.log(`Odd position characters in string :- ${oddString}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT champ");



console.log(`4)`);
function factorialNumber(num) {
  var fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }
  console.log(` The factorial of number ${num} is:-  ${fact}`);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);