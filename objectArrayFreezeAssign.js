console.log(`1) create an object personal Details --->`);
let personalDetails = {
  name: "Divya",
  gender: "female",
  Age: "21",
  education: "BCA",
  city: "Uruli kanchan",
};
console.log(personalDetails);
console.log(
  `*************************************************************************************************************************************************`
);
console.log(`2) create an object College Details --->`);
const CollegeDetails = {
  clgName: "PMD college",
  city: "Uruli kanchan",
  university: "Savitribai fule university",
  cources: "5",
  pincode: "412202",
  departments: "5",
};
console.log(CollegeDetails);
console.log(
  `*************************************************************************************************************************************************`
);
console.log(`3) Merging two objects and logging details --->`);
const personal = {
  name: "Divya",
  gender: "female",
  Age: "21",
  education: "BCA",
  city: "Uruli kanchan",
};
Object.assign(CollegeDetails, personal);
console.log(personal);
console.log(
  `*************************************************************************************************************************************************`
);
console.log(`4) create an array of friends name and freezing --->`);
const friends = ["Riya", "Nikita", "Shrushti", "Shubhangi", "Sonali"];
Object.freeze(friends);
console.log(friends);
console.log(
  `*************************************************************************************************************************************************`
);
console.log(`5) Iterate array using for of loop --->`);

array = ["Riya", "Nikita", "Shrushti", "Shubhangi", "Sonali"];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

var str = "Codemind Technology";
var a = "Technology ";
res = "";
resarr = [];
for (i = 0; i < a.length; i++) {
  if (a[i] == " ") {
    res += resarr.reverse().join("") + " ";
    resarr = [];
  } else {
    resarr.push(a[i]);
  }
}
console.log(
  `*************************************************************************************************************************************************`
);
console.log(
  `6) The Given string company is ---> "${str}" from which Reversing Technology word ---> "${res}"`
);
