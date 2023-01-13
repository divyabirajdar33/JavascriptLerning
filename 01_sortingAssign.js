console.log(`Given Array`);
const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(array_roll_numbers);
console.log(
  `*********************************************************************************************************************`
);

console.log(`1) Reverse the array`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(
  `*********************************************************************************************************************`
);

console.log(
  `2) use the  sort method as it is without any custom sorting logic`
);
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(
  `*********************************************************************************************************************`
);

console.log(`3) sort the array in ascending order`);
array_roll_numbers.sort((a, b)=> {
  return a>b ? 1 : -1;
});
console.log(array_roll_numbers);
console.log(
  `*********************************************************************************************************************`
);

console.log(`4) find the greatest number from the array`);
array_roll_numbers.sort((a, b)=> {
  return a>b ? 1 : -1;
});
console.log(array_roll_numbers);
console.log(`Greatest Number from the array: ${array_roll_numbers[array_roll_numbers.length-1]}`);
console.log(
  `*********************************************************************************************************************`
);

console.log(`5) find the smallest number from the array`);
array_roll_numbers.sort((a, b)=> {
  return a>b ? -1 : 1;
});
console.log(array_roll_numbers);
console.log(`Smallest Number from the array: ${array_roll_numbers[array_roll_numbers.length-1]}`);
console.log(
  `*********************************************************************************************************************`
);
console.log(`6) Remove duplicates from array`);
const newSet = new Set(array_roll_numbers);
console.log(newSet);