const car = {
    carName : "Creta SX",
    company : "Hundai",
    launchYear : 2017
}
const carEngine = {
    enginePower : "1499CC",
    maxPower : "113 BHP"
}
console.log(`1) Merge or concat these two object using Object Assign :`);
Object.assign(car,carEngine)
console.log(car);

console.log(`***********************************************************************************************************`);
console.log(`2) Merge or concat these two object using spread operator :`);
let carEngines = {...car}
console.log(car);