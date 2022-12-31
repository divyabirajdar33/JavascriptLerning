console.log(`1) vehicles Details`);
class vehicles {
  constructor(name, color, engine, fuletype, price) {
    this.name = name;
    this.color = color;
    this.engine = engine;
    this.fuletype = fuletype;
    this.price = price;
  }
}
let vehicle1 = new vehicles(
  "swift",
  "Red",
  "1197cc",
  "petrol & CNG",
  "5.91 Lakh"
);

let vehicle2 = new vehicles(
  "verna",
  "Black",
  "1497cc",
  "petrol & Diesel",
  "15 Lakh"
);

let vehicle3 = new vehicles(
  "Fourtunar",
  "white",
  "2694cc",
  "petrol & Diesel",
  "32 Lakh"
);

let vehicle4 = new vehicles("Skoda", "blue", "1498cc", "petrol", "11 lakh");

let vehicle5 = new vehicles("Ciaz", "Gray", "1462cc", "petrol", "12 Lakh");
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
console.log(vehicle4);
console.log(vehicle5);

console.log(`2)`);
class college {
  constructor(name, location, Department, Cource) {
    this.name = name;
    this.location = location;
    this.Department = Department;
    this.Cource = Cource;
  }
  details() {
    //member function
    console.log(this.name, this.location, this.Department, this.Cource);
  }
}
let college1 = new college("PMD college", "Uruli", "4", "BCA");
let college2 = new college("AM college", "Hadpsar", "5", "BBA");
let college3 = new college("SM Joshi college", "pune", "6", "BCS");
let college4 = new college("JSPM college", "Hadpsar", "5", "MCA");
let college5 = new college(
  "DR.D.Y.patil Institute of technology",
  "pimpri",
  "8",
  "MBA"
);
college1.details();
college2.details();
college3.details();
college4.details();
college5.details();
console.log(
  `******************************************************************************************** `
);
console.log(`3) `);
function traverseObject(allCollege) {
  for (const key in allCollege) {
    if (allCollege.hasOwnProperty.call(allCollege, key)) {
      const element = allCollege[key];
      console.log(`${key}=${element}`);
    }
  }
}
traverseObject(college1);
console.log(
  `******************************************************************************************** `
);
traverseObject(college2);
console.log(
  `******************************************************************************************** `
);
traverseObject(college3);
console.log(
  `******************************************************************************************** `
);
traverseObject(college4);
console.log(
  `******************************************************************************************** `
);
traverseObject(college5);
