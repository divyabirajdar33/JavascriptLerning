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
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinny = new Employee(88, "Vinayak", "IT", 750000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinny,
  emp_mahi,
];
console.log(`1) All Emplyoee from wipro company :-`);
array.filter((Employee) => {
  if (Employee.emp_company == "Wipro") {
    console.log(
      `    Employee Name - ${Employee.emp_name} And Company Name - ${Employee.emp_company}`
    );
  }
});
console.log(
  `*********************************************************************************************************************************`
);
console.log(`2) All Emplyoee from IT or HR department :-`);
array.filter((dept) => {
  if (dept.emp_dept == "HR" || dept.emp_dept == "IT") {
    console.log(
      `    ${dept.emp_id} Name: ${dept.emp_name}, Department: ${dept.emp_dept}, Salary: ${dept.emp_salary}, Company: ${dept.emp_company}`
    );
  }
});
console.log(
  `*********************************************************************************************************************************`
);
console.log(`3) All Emplyoee whose "emp_id" is grater than 50 :-`);
array.filter((Employee) => {
  if (Employee.emp_id >= 50) {
    console.log(
      `    ${Employee.emp_id} Name: ${Employee.emp_name}, Department: ${Employee.emp_dept}, Salary: ${Employee.emp_salary}, Company: ${Employee.emp_company}`
    );
  }
});
console.log(
  `*********************************************************************************************************************************`
);
console.log(
  `4) All Emplyoee whose names start with letter "A" or "V" or "M" :-`
);
array.filter((Employee) => {
  if (
    Employee.emp_name.startsWith("A") ||
    Employee.emp_name.startsWith("V") ||
    Employee.emp_name.startsWith("M")
  ) {
    console.log(
      `    ${Employee.emp_id} Name: ${Employee.emp_name}, Department: ${Employee.emp_dept}, Salary: ${Employee.emp_salary}, Company: ${Employee.emp_company}`
    );
  }
});
console.log(
  `*********************************************************************************************************************************`
);
console.log(`5) Average salary of the employee all the department :-`);
const arrays = [50000, 74000, 47000, 45000, 40000, 75000, 85000];
const Result = arrays.reduce((runningTotal, value) => {
  return runningTotal + value; 
});
// console.log(result);
var length = arrays.length;
// console.log(length);
let Average = Result / length;
console.log(Average);

console.log(
  `*********************************************************************************************************************************`
);
console.log(`6) Average salary for "IT" department :-`);
const array1 = [50000, 40000, 75000];
const result = array1.reduce((runningTotal, value) => {
  return runningTotal + value; 
});
// console.log(result);
var length = array1.length;
// console.log(length);
let average = result / length;
console.log(average);
