function maleMarrigeEligibility() {
    var gender = "male";
    var age = "25";
    var name = "Billgates";
    var resulteligibility = name && gender && age>=21  ? "Eligible for marrige": "Not eligible for marrige";
    console.log(`1.1) Hey ${name} are you ${resulteligibility}`);

    var gender = "male";
    var age = "17";
    var name = "Stew Jobs";
    var resulteligibility = name && gender && age>=21  ? "Eligible for marrige": "Not eligible for marrige";
    console.log(`1.2) Hey ${name} are you ${resulteligibility}`); 
}
maleMarrigeEligibility();

function femaleMarrigeEligibility() {
  var gender = "female";
  var age = "16";
  var name = "Jenifer";
  var resulteligibility = name && gender && age>=18 ? "Eligible for marrige" : "Not eligible for marrige";
  console.log(`\n2.1) Hey ${name} are you ${resulteligibility}`); 
  
  var gender = "female";
  var age = "27";
  var name = "Malinda Gates";
  var resulteligibility = name && gender && age>=18 ? "Eligible for marrige" : "Not eligible for marrige";
  console.log(`2.2) Hey ${name} are you ${resulteligibility}`); 
}
femaleMarrigeEligibility();
