var myName = "divya";
console.log(myName);


var showRsult = function(){
console.log("show");
};
showRsult();


var substraction = function(num1,num2) {
 var result = num1-num2;
 console.log("substaction...",result);
  return result   
}
 var result= substraction(45-20);
 console.log(result);



 var myName = "Mohit";
console.log(myName);

// Function Expression
var showResult = function() {
    console.log("show.....");
};
showResult();

// We can store a function as value in JS
var substraction = function(num1, num2){
    var result = num1 - num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(45, 20);
console.log(result);




 var square= function(num) {
  console.log("square of",num*num);  
}
square(5);
square(6);
square(25);
square(100);