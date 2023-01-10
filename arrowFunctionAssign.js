let show = () => {
  console.log(
    `1) Message with Arrow function is :- ${"Good Morning, Today is Monday"}`
  );
};
show();
console.log(
  `********************************************************************************************************************************`
);
console.log(`2) Miltiplication of 3 parameters`);
let multiply = (n1, n2, n3) => {};
console.log(`a) Multiplication of number 5,5,2 is :-  ${5 * 5 * 2} `);

let multiplys = (n1, n2, n3) => {};
console.log(`b) Multiplication of number 10,4,1 is :-  ${10 * 4 * 1} `);
console.log(
  `********************************************************************************************************************************`
);
console.log(`3) Addition of 5 Parameters and return`);
let add = (n1, n2, n3, n4, n5) => {
  let add = n1 + n2 + n3 + n4 + n5;
  return add;
};
let addResult = add(100, 100, 200, 349, 756);
console.log(`a) Addtion is :- ${addResult}`);
let addition = (n1, n2, n3, n4, n5) => {
  let addition = n1 + n2 + n3 + n4 + n5;
  return addition;
};
let additionResult = addition(
  "I am",
  " learning",
  " ES6",
  " features",
  " in depth"
);

console.log(`c) Addition is :- ${additionResult}`);
