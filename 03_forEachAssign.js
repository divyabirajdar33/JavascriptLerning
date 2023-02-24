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
const emp_radha = new Employee(33, "Radha", "HR", 7400, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_vinny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "IT", 85000, "Infy");
const mapOfEmployee = new Map();
mapOfEmployee.set(22, emp_anil);
mapOfEmployee.set(33, emp_radha);
mapOfEmployee.set(55, emp_rishi);
mapOfEmployee.set(66, emp_sonali);
mapOfEmployee.set(77, emp_monika);
mapOfEmployee.set(88, emp_vinny);
mapOfEmployee.set(99, emp_mahi);

console.log(`Create Map and Traverse using forEach loop`);
mapOfEmployee.forEach((EmployeeObject, emp_id) => {});
const keyOfMapEmployee = mapOfEmployee.keys();
for (const key of keyOfMapEmployee) {
  const Employee = mapOfEmployee.get(key);
  console.log(
    `${Employee.emp_id} ===> Name: ${Employee.emp_name} , Department: ${Employee.emp_dept} , Salary: ${Employee.emp_salary} , Company: ${Employee.emp_company}`
  );
}
