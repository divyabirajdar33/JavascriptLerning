var votingEligibility = function(age){
    if(age<=0 || age>120 ){
        console.log(`\n your age is ${age} ---> Invalid data`);
    return;
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
votingEligibility(-10);
votingEligibility(200); 
votingEligibility(0);
console.log(`\n marks 98 ---> fantastic , A `);
console.log(`\n marks 80 ---> Excellent , A+`);
console.log(`\n marks 90 ---> Fantastic , A`);
console.log(`\n marks is 35 ---> C Need Improvement`);
console.log(`\n marks 64 ---> Good , B`);
console.log(`\n marks is 49 ---> C Need Improvement`);
console.log(`\n marks are 0 ---> Invalid Marks`);
console.log(`\n marks are 150 ---> Invalid Marks`);
console.log(`\n marks are -7 ---> Invalid Marks`);
console.log(`\n marks are 91 ---> Invalid Marks`);
console.log(`\n marks are Eighty ---> Invalid Marks`);



