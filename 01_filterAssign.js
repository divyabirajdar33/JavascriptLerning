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
console.log(`All objects from TCS using filter`);
const array = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinny,
  emp_mahi,
];
array.filter((Employee) => {
  if (Employee.emp_company == "TCS") {
    console.log(
      `Employee Name - ${Employee.emp_name} And Company Name - ${Employee.emp_company}`
    );
  }
});
