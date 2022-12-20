var votingEligibility = function(age){
    if(age<=0 || age>120 ){
        console.log(`\n your age is ${age} ---> Invalid data`);
    }
    if(age>=18 && age<=120) {
        console.log(`\n your age is ${age} ---> You are eligible for voting`);
    }
    if(age<18 && age>0){
        console.log(`\n your age is ${age} ---> You are not eligible for voting`);
    }
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20)
console.log("\n");
votingEligibility(-10);
votingEligibility(200); 
votingEligibility(0);

function gradeCalculation(marks){
    if(marks>=90 && marks<100){
       console.log(`\n your marks ${marks} ---> Fantastic marks ,your grade is A+ `); 
    }
    if(marks>=75 && marks<90){
        console.log(`\n your marks ${marks} ---> Excellent marks ,your grade is A `); 
     }
     if (marks>=50 && marks<75) {
        console.log(`\n your marks ${marks} ---> Good marks ,your grade is B `); 
     }
     if (marks>=35 && marks<50) {
        console.log(`\n your marks ${marks} ---> your grade is C, Need improvement`);
     }
     if (marks<=0 || marks>100) {
        console.log(`\n your marks ${marks} ---> please provide the valid marks `);
     }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
console.log("\n");
gradeCalculation("0");
gradeCalculation("150");
gradeCalculation("-7");
gradeCalculation("35");
gradeCalculation("29");
gradeCalculation("64");
gradeCalculation("49");








