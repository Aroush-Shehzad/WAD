//JS is a dynamilcally typed language
console.log("Lab 5 WalkThrough");
fullName="Tony Stark";  //camel case (first letter small(lowercase) rest capital)  (automatic)
age=24;
var price=99.9;
let radius=14;
y=undefined;
console.log(fullName);
console.log(age);
console.log(y);
//JavaScript Variables can be declared in 4 ways:
//   Automatically...not preferred as no datatype defined, will accept any type
//   var....not used much now (global scope)
//   let....can be updated (block scope)
//   const....fixed can not be updated
//Diff b/w Global & {} block scope
//use Type of to check each datatype 
//to create object we write datatype(const) then name(student) ={key-value pairs(fullname:"Rahul")};
//we create object to store diff types of datatypes
//to acces variable from object(console.log(student{"age"});)
var name = "John"; // String
const isStudent = true; // Boolean
var name = "Ahmed";
console.log(name); // Output: Ahmed

var name = "Ali"; // Redeclaring allowed
console.log(name); // Output: Ali

name = "Sara"; // Updating allowed
console.log(name); // Output: Sara

if (true) {
    var test = "Inside block";
}
console.log(test); 
age = 25;
console.log(age); // Output: 25

console.log(age); // Output: 30

if (true) {
    let insideBlock = "Hello";
    console.log(insideBlock); // Output: Hello
}
// console.log(insideBlock); //  Error: insideBlock is not defined
let a = 10;
let b = 5;
console.log("Sum");
console.log(a + b); // Addition
console.log("Differecence");
console.log(a - b); // Subtraction
console.log("Product");
console.log(a * b); // Multiplication
console.log("Division");
console.log(a / b); // Division
console.log("Mod");
console.log(a % b); // Modulus

let score = 80;
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//Loops
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
