function display(){
    console.log(" ---- 1) Two function with no arguments and no return ----");
 }
 display();

 function showDetails(my){
console.log(my);
 }
showDetails("I Love Java");
function details(name){
    console.log(name);
     }
details("learning Angular");
function personal(){
    console.log(" ---- 2)  WAF personal details ----");
 }
 personal();

 function show(myName){
console.log(myName);
 }

function personalDetails(name){
    console.log(name);
     }
personalDetails("Divya");
function personalDetails(name){
    console.log(name);
     }
personalDetails("Birajdar");
function personalDetails(name){
    console.log(name);
     }
personalDetails("Padmashree Manibhai Desai Mahavidhyalya");
console.log("---- 3)  swap values ----");
function swapValuesDude(value1,value2) {
    console.log("Before swaping:-",value1,value2);
    var temp = value1;
    value1=value2;
    value2=temp;
    console.log("After swaping:-",value1,value2);   
}
swapValuesDude("Virat","Anushaka");
swapValuesDude("1000","2000");

console.log(" ---- 4) Three parameters ----");

function addThreeValues(val1,val2,val3){
console.log(val1+val2+val3);
}
addThreeValues("10.23+600+40");
showDetails("HelloGoodMorning");