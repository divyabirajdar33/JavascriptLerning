console.log(`Boom boom`);
var isRoadBlocked = true;
if (isRoadBlocked) {
    console.log(`Travelling thru express way`);
    console.log(`Travel will be short just for 2 hrs`);
}else{
    console.log(`Travelling thru tunnel`);
    console.log(`Travel will long just for 5 hrs`);
}


// Write a Function expression with one arg—> age to check whether he or she is eligible for voting or not, Then accordingly display message.
// Ex. 45, 17, 8, 20, -10, 200, 0

var votingEligibility = function (age) {
    if (age<=0 || age>120) {
        console.log(`Invalid Data: ${age}`);
    } else {
        console.log(`valid Data`);
        if(age>=18){
            console.log(`Congrations you can vote: ${age}`);
        }else{
            console.log(`sorry you are not eligible for vote: ${age}`);
        }
    }
}
votingEligibility(230);
votingEligibility(-20);
votingEligibility(10);


function isEvenOrOdd(num) {
    if (typeof num == "number") {
      console.log(`Valid number ${num}`);
      if (num % 2 === 0) {
        console.log(`Even number`);
      } else {
        console.log(`Odd Number`);
      }
    } else {
      console.log(`Invalid number ${num}`);
    }
  }
  isEvenOrOdd(20);
  isEvenOrOdd(11);
  isEvenOrOdd("30");
  







  