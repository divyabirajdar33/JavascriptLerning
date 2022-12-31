console.log(`1) Properties:-`);
const person= {
    name: "siya",
    gender: "female",
    height:5.4,
    weight:55
}
console.log(person); 
console.log(`\n`);
console.log(`2) Include nested objects:-`);
const degrees ={
    engineering:"CSE",
    PHD:"Adv Computing",
    Master:"Programming",
    
}
console.log(degrees);
console.log(`\n`);
console.log(`3) Include nested objects Certificates:-`);
const Certificates = {
    One:"Hacker Rank Participation",
    Two:"Certificate in IFE Cource",
    Three:"Certificate in Adv Programming"
}
console.log(Certificates);
console.log(`\n`);
console.log(`4) Add Function`);
const professor = {
    degrees: {
        engineering:"CSE",
        PHD:"Adv Computing",
        Master:"Programming",
        add: function() {
           return this.engineering +this.PHD +this. Master;
        }
    }
}
const totaldegrees=
professor.degrees.add();
console.log(`Teachers Total Degrees are :- ${totaldegrees}`);
console.log(`\n`);
console.log(`5) Add new property:-`);
person.age = 28;
console.log(person);
console.log(`\n`);
console.log(`6) Modify property:-`);
person.age = 35;
console.log(person);
console.log(`\n`);
console.log(`7) Delete one certificate from nested object:-`);
delete Certificates.Two;
console.log(Certificates);
console.log(`\n`);
console.log(`8) Add new certificate in nested object:-`);
const certificate = {
    Three:"Angular",
    One:"Hacker Rank Participation",
  Two:"Certificate in Adv Programming"
 
}
console.log(Object.values(certificate));
console.log(`\n`);
console.log(`9) The nested object certificate:-`);
const certificates = certificate["Three"];
console.log(certificates);

