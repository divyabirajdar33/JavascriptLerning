class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_vinny = new Employee(88, "Vinayak", "IT", 750000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "IT", 85000, "Infy");
console.log(`1) TCS employee name and company name:-`);
const array = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinny,
  emp_mahi,
];
array.forEach((Employee) => {
  if (Employee.emp_company == "TCS") {
    console.log(`Employee Name:- "${Employee.emp_name}" And Company Name :- "${Employee.emp_company}"`);
  }
});

console.log(
  `******************************************************************************************************************************`
);
console.log(`2) Employee who have salary greater than equal to 50000:-`);
array.forEach((Employee) => {
  if (Employee.emp_salary >= 50000) {
    console.log(`Emplyoee Name:- "${Employee.emp_name}" And Salary:- "${Employee.emp_salary}"`);
  }
});

console.log(
  `******************************************************************************************************************************`
);
console.log(`3) Sum of all emplyoees salary:-`);
let add = function (n1, n2, n3, n4, n5, n6, n7) {
  console.log(n1 + n2 + n3 + n4 + n5 + n6 + n7);
};

function operation(callbackAdd) {
  callbackAdd(50000, 74000, 47000, 45000, 40000, 75000, 85000);
}
operation(add);
console.log(
  `******************************************************************************************************************************`
);
console.log(`4) Average salary of all emplyoees:-`);
let div = function (n1, n2) {
  console.log(n1 / n2);
};
function division(div) {
  div(416000, 7);
}
division(div);

console.log(
  `******************************************************************************************************************************`
);
console.log(
  `5) IT and HR deptartment employee whose salary is greater than or equal to 75000 INR and log employee details:- `
);
array.forEach((dept) => {
  if (dept.emp_dept=="hr"||dept.emp_dept=="IT" && dept.emp_salary >= 75000) {
    console.log(`${dept.emp_id} Name: ${dept.emp_name}, Department: ${dept.emp_dept}, Salary: ${dept.emp_salary}, Company: ${dept.emp_company}`);
  }
});

 

//  console.log(`3)Sum of all emplyoees`);
//  var sum = 0;
//  arrayOfEmployee.forEach((sumOfSal) => {
//    sum = sum + sumOfSal.emp_salary;
 
//  });
//  console.log("Sum of all employee salary is: ", sum);
//  console.log(`4)Average Salary`);
//  var length = arrayOfEmployee.length;
//  console.log(`Length of an array:${length}`);
//  let avarage = sum / length;
//  console.log(`Avarage of salary: ${avarage}`);
 
 


