// Equality
// ==, ===

// Assignment
let age = 77;
let age2 = "77";

console.log(typeof age);

// Arithmetic

// Addition (if all operands are of the type of number) / Concatenation (when one of the operands is a string)
let age3 = age + age2;
console.log(age3); // concatenation happens

age3 = age + parseInt(age2); // type coercion, where a value is converted from one type to another (string -> number)
console.log(age3); // now addition happens

// Subtration (-)

// Multiplacation (*)

// Division (/)

// Comparison

// Equality
console.log(age == age2); // Loose (evaluates to true, because the values are equal)
console.log(age === age2); // Strict (evaluates to false, because even though the values are equal, the type is not)
console.log(age === parseInt(age2)); // Strict (Evaluates to true because the string has been converted into a Number)

// Greater than
console.log(3 > 9); // false
console.log(12 > 9); // true

// Greater than or Equal to
console.log(9 >= 9); // true
console.log(12 >= 7); // true
console.log(7 >= 12); // false

// Less than
console.log(12 < 5); // false
console.log(12 < 13); // true
console.log(12 < 12); // false

// Less than or Equal to
console.log(12 <= 12); // true
console.log(10 <= 12); // true
console.log(13 <= 12); // false

const x = (1 + 2) * 3;
console.log(x);

// LOGICAL OPERATORS

// TERNARY

// NULLISH COALESCING

// !
