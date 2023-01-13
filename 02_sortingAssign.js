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

   const arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinny,emp_mahi];
   console.log(`1) sort the array in ascending order of emplyoee id `);
  arrayOfEmployee.sort((emp1,emp2)=>{
    return emp1.emp_id> emp2.emp_id ? 1 : -1;
     });
     arrayOfEmployee.forEach((currentValue)=>{
      console.log(`${currentValue.emp_id} Name: ${currentValue.emp_name}, Department: ${currentValue.emp_dept}`);
     });
  console.log(`*********************************************************************************************************************`);
  console.log(`2) sort the array in ascending order of emplyoee department `);
  arrayOfEmployee.sort((emp1,emp2)=>{
    return emp1.emp_dept> emp2.emp_dept ? 1 : -1;
     });
     arrayOfEmployee.forEach((currentValue)=>{
        console.log(`${currentValue.emp_id} Name: ${currentValue.emp_name}, Department: ${currentValue.emp_dept}`);
     });
  console.log(`*********************************************************************************************************************`);
  console.log(`3) sort the array in decending order of employee salary `);
  arrayOfEmployee.sort((emp1,emp2)=>{
    return emp1.emp_dept> emp2.emp_dept? 1 : -1;
     });
     arrayOfEmployee.forEach((currentValue)=>{
      console.log(`${currentValue.emp_id} Name: ${currentValue.emp_name}, Department: ${currentValue.emp_dept}`);
     });