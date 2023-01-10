console.log(`1)created class and added data members`);
console.log(`*************************************************************************************************************************************`);
class bank {
    constructor(bank_Name, location, account_number, ifsc_code, interest_rate) {
      this.bank_Name = bank_Name;
      this.location = location;
      this.account_number = account_number;
      this.ifsc_code = ifsc_code;
      this.interest_rate = interest_rate;
    }
  }
  let axisBank = new bank("AXIS Bank","swarget","675698763408","AXB00000782","10%");
  let sbiBank = new bank("SBI","Uruli Kanchan","455643789800","SBI00000675","8%");
  let iciciBank = new bank("ICIC Bank","Hadpsar","785647609122","icic000243","11%");
  let kotakBank = new bank("kotak Bank","Nigadi","988934345873","KBK000879","13%");
  let hdfcBank = new bank("HDFC Bank","Bhosari","458790123412","HDFC000871", "9.5%");
  let panjabBank = new bank("Panjab Bank","Wakad","568907689000","PB0000675","10%");
console.log(`2) created object :-`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);

  const mapOfBank = new Map();
  mapOfBank.set(675698763408,axisBank);
  mapOfBank.set(785647609122,sbiBank);
  mapOfBank.set(988934345873,kotakBank);
  mapOfBank.set(458790123412,hdfcBank);
  mapOfBank.set(568907689000,panjabBank);

  console.log(`3) create map in such way that key should be bank account number and value is object:-`);
  console.log(`*************************************************************************************************************************************`);
 const keyOfMapBank = mapOfBank.keys();
 console.log(keyOfMapBank);
 console.log(`*************************************************************************************************************************************`);
 
 console.log(`4) Traverse map and log bank name,account number and interest rate:-`);
 for (const key of keyOfMapBank) {
     const bank = mapOfBank.get(key);
     console.log(bank.account_number, bank.bank_Name,bank.interest_rate);
 } 