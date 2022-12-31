var string = "I am very good IT Developer"
function countCharA(num1) {
    var counter = 0;
for (let index = 0; index <string.length; index++) {
    var char = string.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u') {
        console.log(char);
        counter = counter +1; 
    }   
}
console.log(`Total no vowels in given string is:- ${counter}`);
}
countCharA(string);
console.log(`============================================`);


console.log(`============================================`);

console.log(`============================================`);
function factroialNumber(num) {
    var fact = 1;
    for (let i =num; i>0; i--){
      fact=fact*i;        
    }
    console.log(`The factorial of number ${num} = ${fact}`);
}
factroialNumber(5);
factroialNumber(7);
factroialNumber(8);
factroialNumber(12);

