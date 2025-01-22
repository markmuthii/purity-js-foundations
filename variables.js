// store data
// const, let, var - keywords (used when you're declaring variables in JavaScript)

// Declaration/Definition
// By default, a variable is assigned a value of undefined
let firstName;

console.log(firstName);

// Initialization/Assignment
firstName = "John";
let lastName = "Wick";

console.log(firstName);
console.log(lastName);

// Re-assignment
lastName = "McClane";

// Re-initialization
// let lastName = ""; // cannot be done with variable declared using the let keyword

var student = "Jane Doe";

var student = "Mary Smith";

// CONST
// You have to declare AND initialize the variable
// const wrong; // Error: 'const' declarations must be initialized
const middleName = "a value";

// middleName = "another value"; // Error: cannot re-assign
