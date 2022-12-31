let fruitsSeasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]; 
console.log(fruitsSeasonal);
let firstElement = fruitsSeasonal[0];
let lastElement = fruitsSeasonal[fruitsSeasonal.length - 1];
console.log(`1) First element is : ${firstElement}`);
console.log(`   Last element is : "${lastElement}"`);
console.log("\n");

fruitsSeasonal.unshift("Papaya");
console.log(`2)Adding Papaya before banana: "${fruitsSeasonal}"`);
console.log("\n");

fruitsSeasonal.splice(4, 1);
console.log(`3)Remove Mango from array: "${fruitsSeasonal}"`);
console.log("\n");

fruitsSeasonal.push("Pineapple");
console.log(
  `4)Insert an element  Pineapple at last Position: "${fruitsSeasonal}"`
);
console.log("\n");

fruitsSeasonal.splice(fruitsSeasonal.length - 1, 0, "Dragon Fruit");
console.log(
  `5)Insert element Dragon Fruit before Water Malon: "${fruitsSeasonal}"`
);
console.log("\n");

fruitsSeasonal.splice(2, 1, "Kiwi");
console.log(`6)Replace an element Orange with Kiwi: "${fruitsSeasonal}"`);
console.log("\n");

fruitsSeasonal.splice(5);
fruitsSeasonal.shift();
console.log(`7)Elements starting from index 1 to 4: "${fruitsSeasonal}"`);
console.log("\n");
let newFruitsSeasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]; // Empty Array
console.log(newFruitsSeasonal);
let lastThree = newFruitsSeasonal.slice(newFruitsSeasonal.length - 3);
console.log(`8) Last 3 element in th array: "${lastThree}"`);