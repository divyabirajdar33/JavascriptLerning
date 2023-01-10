const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(
  `1) Array elements and its index using for each loop with arrow function`
);
arrayNumbers.forEach((arrayNumbers, index) => {
  console.log("value is", arrayNumbers, "index is ", index);
});
console.log(
  `*******************************************************************************************************************************`
);
console.log(`2) The positive values in array are:-`);
const positive = [];
arrayNumbers.forEach((arrayNumbers) => {
  if (arrayNumbers > 0) {
    positive.push(arrayNumbers);
  }
});
console.log(positive);
console.log(
  `*******************************************************************************************************************************`
);
console.log(`3) The Negative values in array are:-`);
const negative = [];
arrayNumbers.forEach((arrayNumbers) => {
  if (arrayNumbers < 0) {
    negative.push(arrayNumbers);
  }
});
console.log(negative);
console.log(
  `*******************************************************************************************************************************`
);
console.log(`4) The even numbers in array are :-`);
const arrayOfEven = [];
arrayNumbers.forEach((currentValue) => {
  if (currentValue % 2 == 0) {
    arrayOfEven.push();
  }
});
console.log(arrayOfEven);
console.log(
  `*******************************************************************************************************************************`
);
console.log(`5) The sum of all elements in array are :-`);
sum = 0;
arrayNumbers.forEach((currentValue) => {
  sum += currentValue;
});
console.log(sum);
console.log(
  `*******************************************************************************************************************************`
);

console.log(`6) The Even positioned in array:-`);
const arrayOfEvens = [];
arrayNumbers.forEach((currentValue, index) => {
  if (index % 2 == 0) {
    arrayOfEvens.push(currentValue);
  }
});
console.log(arrayOfEvens);
