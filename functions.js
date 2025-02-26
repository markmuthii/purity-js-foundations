// // What is a function
// // What is the syntax of a function
// // How do you use a function
// // What effect do functions have to code execution

// // Group of statements bundled together - its purpose is to accomplish a certain task
// function nameOfTheFunction() {
//   // Content of the function (bundled statements)
// }

// // the above function can be called like:
// nameOfTheFunction();

// // Function that asks for your name and greets you
// function sayHello() {
//   let you = prompt("What is your name?");

//   console.log("Hello", you + "!");
// }

// sayHello();

// // Parameters
// // Arguments

// function tester(para1, para2) {
//   return para1 + " " + para2;
// }

// const arg1 = "Argument 1";

// tester(arg1, arg2);

// function myFunc(param1, param2) {
//   // Code of the function
// }

// // x and y as parameters
// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }

// // When the function is called, it adds the parameters and logs the result
// // To do this, we can call the function with arguments
// myFunc("arg1", "arg2");

// // Examples of arguments
// console.log("This is an argument");

// prompt("Argument here too");

// let arr = [];

// arr.push("argument");

// // Depending on the arguments that you are calling with the function the outcome of the function can change eg addToNumbers() function looks like this
// addTwoNumbers(3, 4);
// addTwoNumbers(12, -90);

// // If we call addTwoNumbers() function without any arguments
// addTwoNumbers();
// // JavaScript gives the variables a default type which is undefined

// // undefined + undefined is equal to NaN
// // JS takes different default parameters eg function addTwoNumbers(x = 2, y = 3) {console.log(x + y)}
// // If you call the function with no arguments it will automatically assign 2 to x and 3 to y, unless you override them by calling the function with argument values used for invoking are prioritized over hardcoded arguments
// addTwoNumbers(); // 5
// addTwoNumbers(6, 6); // 12
// addTwoNumbers(10); //13

// // If you call a function with more arguments than parameters, nothing will happen
// // JavaScript will just execute the function using the first arguments that can be mapped to parameters
// // eg addTwoNumbers(1,2,3,4) the output will be 3, ie it is adding 1 and 2 and ignoring the last two arguments (3 and 4)

// // Special functions and operators
// // Arrow functions, spread and rest operators

// // Arrow functions are great for sending functions around as parameters and using shorter notations
// // Spread and rest operators make our life easier by being more flexible when sending arguments and working with arrays

// // Arrow functions
// // Special way of writing functions that can be confusing at first:
// // (param1, param2) => {body of the function};
// // Or for no parameters
// // () => body of the function

// const functionName = () => {
//   // body of the function
// };

// const functionName2 = (param1, param2) => {
//   // body of the function
// };

// // this is useful whenever you want to write an implementation on the spot eg inside another function as an argument, They are shorthand notations for writing functions most often used for functions that consist of only one statement eg function doingStuff(x) {console.log(x)}

// // To re-write this as an arrow function, you have to store it in a variable or send it in as an argument if you want to be able to use it.

// // Use the name of the variable to execute the arrow function eg let doingArrowStuff = x => console.log(x) and invoke it like this: doingArrowStuff("great")
// // If there is more than one argument, we will have to use parenthesis eg let addTwoNumbers = (x, y) => console.log(x + y)
// // We can call it like this addTwoNumbers(5, 3)
// // If there are no arguments, you must use parenthesis like this let sayHi = () => console.log("hi")
// // If we call sayHi() it log hi to the console

// // const arr = ["squirrel", "alpaca", "buddy"]
// // arr.forEach(e => console.log(e))

// function nameOfTheFunction() {
//   console.log("This is the body/content of the function");
// }

// nameOfTheFunction();

// function functionWithParams(param1, param2) {
//   console.log("Parameter 1: " + param1);
//   console.log("Parameter 2: " + param2);
// }

// functionWithParams("Argument 1", "Argument 2");
// functionWithParams(77, true);
// functionWithParams();

// const arrowFunction = () => {
//   // Content of the function
//   console.log("This is an arrow function");
// };

// arrowFunction();

// const arrowFunctionWithParams = (param1, param2) => {
//   // Content of the function
//   console.log("Parameter 1: " + param1);
//   console.log("Parameter 2: " + param2);

// function addTwoNumbers(param1, param2) {
//   return param1 + param2;
// }

// let val1 = 20;
// let val2 = 10;

// let result = addTwoNumbers(val1, val2);

// console.log(result);

// let val3 = 40;
// let val4 = 50;

// let result2 = addTwoNumbers(val3, val4);

// console.log(result2);

// When you have some logic within the body of the function before the return statement
const arrowFunction = () => {
  // Some logic
  return "return value";
};

// When you only have a return value in the function, you can simplify the function like so:
const arrowFunction1 = () => "return value 1";

// console.log(arrowFunction());
// console.log(arrowFunction1());

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwoNumbers(4, 3, 7, 8, 9, 10));

const addTwoNumbers1 = (num1, num2) => num1 + num2;

console.log(addTwoNumbers1(40, 30));
