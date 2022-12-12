console.log("1) Function Expression for to find square of given values:-");

var square = function (num) {
  console.log("square of 5 =", num * num);
};
square(5);
var square = function (num) {
  console.log("square of 6 =", num * num);
};
square(6);
var square = function (num) {
  console.log("square of 25 =", num * num);
};
square(25);
var square = function (num) {
  console.log("square of 100 =", num * num);
};
square(100);
console.log("2) type of function Expression is = function");

var rectangle = function (Num1, Num2) {
  console.log("3) Area of Rectangle ploat is", Num1 * Num2);
};
rectangle(499, 917);

console.log("4) Functions Expression for swaping  given values:-");
function swapValues(value1, value2) {
  console.log("Before swaping:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swaping:", value1, value2);
}
swapValues("Virat", "Anushaka");
swapValues("1000", "2000");

console.log("5) function expression for string:-");
var str = function (value) {
  var length = value.length;
  console.log("string is", value);
  console.log("A) Total character in the string", value.length);
  console.log(" B) character at index 6", value.charAt(6));
  console.log(" C) character at index 11", value.charAt(11));
  console.log(" D ) Last character  in given string is  =",
    value.charAt(value.length - 1)
  );
  console.log(" E ) First character  in given string is =", value.charAt(0));

  console.log(" F1) Lenght of given string is =", value.length);

  console.log(
    " F2)  Square of  length of given string is =",
    value.length * value.length
  );
};
str("JS the most popular language");
