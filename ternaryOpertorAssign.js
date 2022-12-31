
function interviewEligibility(gradScore,hscScore,sscScore,candidateName) {
var resulteligibility = gradScore>=70 || hscScore>=80 || sscScore>=90 || candidateName ? "Eligible for TCS Interview" : " Unfotunately Not eligible for TCS Interview";
console.log(`\n 1) Congrates ${candidateName} you are ${resulteligibility}`); 
}
interviewEligibility("80","86","90","Divya");

function interviewEligibility(gradScore,hscScore,sscScore,candidateName) {
    var resulteligibility = gradScore>=70 || hscScore>=80 || sscScore>=90 || candidateName ? "Eligible for TCS Interview" : " Unfotunately Not eligible for TCS Interview";
console.log(`\n 2) Congrates ${candidateName} you are ${resulteligibility}`);
}
interviewEligibility("70","65","55","Riya" );

function interviewEligibility(gradScore,hscScore,sscScore,candidateName) {
    var resulteligibility = gradScore>=70 || hscScore>=80 || sscScore>=90 || candidateName ? "Eligible for TCS Interview" : " Unfotunately Not eligible for TCS Interview";
console.log(`\n 3) unfotunately ${candidateName} you are ${resulteligibility}`);
}
interviewEligibility("60","79","88","Nikita");
  
