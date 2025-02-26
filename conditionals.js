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

if (0n) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

if (NaN) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

if (false) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// if...elseif...else
// Switch
