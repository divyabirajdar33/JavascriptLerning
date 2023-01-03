console.log(`1) Created the class an added members`);
console.log(`*************************************************************************************************************************************`);
console.log(`2) create bank object`);

class bank {
  constructor(bank_Name, location, account_number, ifsc_code, interest_rate) {
    this.bank_Name = bank_Name;
    this.location = location;
    this.account_number = account_number;
    this.ifsc_code = ifsc_code;
    this.interest_rate = interest_rate;
  }
}
let axisBank = new bank(
  "AXIS Bank",
  "swarget",
  "675698763408",
  "AXB00000782",
  "10%"
);
let sbiBank = new bank(
  "SBI",
  "Uruli Kanchan",
  "455643789800",
  "SBI00000675",
  "8%"
);
let iciciBank = new bank(
  "ICIC Bank",
  "Hadpsar",
  "785647609122",
  "icic000243",
  "11%"
);
let kotakBank = new bank(
  "kotak Bank",
  "Nigadi",
  "988934345873",
  "KBK000879",
  "13%"
);
let hdfcBank = new bank(
  "HDFC Bank",
  "Bhosari",
  "458790123412",
  "HDFC000871",
  "9.5%"
);
let panjabBank = new bank(
  "Panjab Bank",
  "Wakad",
  "568907689000",
  "PB0000675",
  "10%"
);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);
console.log(`*************************************************************************************************************************************`);
console.log(
  `3) Add all object element in array and Traverse this array using for of loop and log Bank name location`
);

const arrayOfBank = [
  axisBank,
  sbiBank,
  iciciBank,
  kotakBank,
  hdfcBank,
  panjabBank,
];

for (const element of arrayOfBank) {
  console.log(`${element.bank_Name} , ${element.location}`);
}
console.log(`*************************************************************************************************************************************`);
console.log(`4) Find the object which has name "Kotak Bank" using for of loop`);
for (const element of arrayOfBank) {
  if (element.bank_Name == "Kotak Bank") {
    console.log(element);
  }
}console.log(`*************************************************************************************************************************************`);
console.log(`5) Log the details using for loop`);
for (let index = 0; index < arrayOfBank.length; index++) {
  console.log(arrayOfBank[index]);
}
