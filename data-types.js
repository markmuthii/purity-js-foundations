// Primitive data types

// Strings
// Text value
let str = "this is a string";
let str2 = "This is another (2nd) string!";
let str3 = str + " " + str2;
let str4 = `${str} ${str2}`;

console.log(str3);
console.log(str4);

let age1 = 31; // John's age
let age2 = 39; // Jane's age
let ageGap = `Jane is ${age2 - age1} years older than John`;
console.log(ageGap);

let html = "<h1>This is a heading</h1>";

let html2 = `
  <h1>This is another heading</h1>
  <p>This is a paragraph showing the age gap as ${ageGap}.
`;

// Numbers
// Integers, floats, positive, negative
let num = 34;
console.log(num);

num = -34;
console.log(num);

num = 0.2;
console.log(num);

num = -23.56;
console.log(num);

// BigInt
// Between 2p53-1 and -(2p53-1)
let maxSafeNum = 9007199254740991;
let minSafeNum = -9007199254740991;
let bigIntPositiveStart = BigInt(maxSafeNum + 1);
let bigIntNegativeStart = BigInt(minSafeNum - 1);
console.log(bigIntPositiveStart);
console.log(bigIntNegativeStart);

// Boolean
// True and false
let bool = true;
bool = false;

console.log("true" === true);
console.log(false === true);
console.log(false === false);

// Symbol
// Es6 data type - used when it is important that variables are not equal even though their value and type are the same
let john = Symbol("John Doe");
let john2 = Symbol("John Doe");
console.log(john == john2);

// Undefined
// Used for a variable that has not been assigned a value
let un;
console.log(un);

// Null
// Special value for saying that a variable is empty or has an unknown value. Case sensitive, and it should be lowercase
let nullVal = null;

// Undefined and null are what's called falsy types - when used as a condition, they evaluate to false
if (un) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

if (nullVal) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// Empty string, number 0 and false are falsy values - when used in a condition, they also evaluate to false
if ("") {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

if (0) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

if (false) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// Non-primitive data types

// Function
// Represents a block of code which is designed to perform a particular task

// Object
// Represents collection of properties where each prop is a key-value pair

// Array
// Store multiple values in a single variable (an ordered list)

// Date
// Represents date and time

// Map
// Collection of keyed data items similar to an object but keys retain original order

// Set
// Collection of unique values
