const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`1) Original array : [${arrayNums}]`);
arrayNums.push(55, 66);
arrayNumber = arrayNums; // shallow cloning
console.log(`Clone array after updating 55,66 :[${arrayNumber}] `);
console.log(
  `************************************************************************************************************`
);

arrayNums.push(10, 25);
console.log(`2) orignal array :[${arrayNums}]`);
let array = { ...arrayNums }; // Deep Cloning using spread operator (... )
console.log(` Clone array using spread operator :[${arrayNums}]`);
console.log(
  `************************************************************************************************************`
);

let arrayEven = [2, 30, 14, 8];
let arrayNum = [20, 3, 4, 56, 90, 400, 49];
let concatArray = arrayEven.concat(arrayNum); //array merge using concat
console.log(`3) orignal array: [${arrayEven}]`);
console.log(` Merge array using concat : [${concatArray}]`);
console.log(
  `************************************************************************************************************`
);

const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokli,431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"],
};
console.log(`4) John Doe Address is : ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city} , ${employee_info.address.state} , ${employee_info.address.country}`);
console.log(
  ` John Doe Mobile Numbers are : ${employee_info.mobiles[0]}, ${employee_info.mobiles[1]}, ${employee_info.mobiles[2]} `
);

console.log(
  `************************************************************************************************************`
);
console.log(`5) Update property "july_month salary to 80 k on cloned object":`);
let employee = JSON.parse(JSON.stringify(employee_info));
employee.salary.july_month = "80,0000INR";
console.log(employee_info.salary);
console.log(employee.salary);
console.log(`\n`);
console.log(
  ` Update property " Countrey" to " United Kingdam" on origanal object:`
);
let employees = JSON.parse(JSON.stringify(employee_info));
employee.address.country = "United Kingdam";
console.log(employee_info.address);
console.log(employee.address);
console.log(`\n`);
console.log(` Update Values for original and cloned object:`);
let emp = JSON.parse(JSON.stringify(employee_info));
employee.address.country = "United Kingdam";
console.log(employee_info.address);

employee.salary.july_month = "80,0000INR";
console.log(employee_info.salary);
console.log(`\n`);
console.log(employee.address);
console.log(employee.salary);
