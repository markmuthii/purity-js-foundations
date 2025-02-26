// let and const vs var

// Scope

// Global
// let a = 7;

// // Local
// if (1 < 3) {
//   console.log("Here");

//   console.log(a);
// } else {
//   console.log(a);
//   console.log("Here");
// }

// console.log(a);

// Destructuring
// 1. Objects
const student = {
  name: "John Wick",
  age: 77,
};

// Get the value of a key and store it in a variable
// const age = student.age;
// const name = student.name;

// With destructuring:
// const { age, name } = student;
// console.log(name);
// console.log(age);

// 2. Arrays
const useState = () => {
  return ["element 1", "element 2"];
};

// const result = useState();

// Without destructuring
// const el1 = result[0];
// console.log(el1);
// const el2 = result[1];
// console.log(el2);

// With destructuring
const [el1, el2] = useState();
console.log(el1);
console.log(el2);

const students = [
  {
    name: "John Wick the First",
    age: 36,
  },
  {
    name: "Jane Wick the First",
    age: 28,
  },
  {
    name: "Mary Wick the First",
    age: 24,
  },
  {
    name: "Smith Wick the First",
    age: 26,
  },
  {
    name: "Kate Wick the First",
    age: 29,
  },
];

const [john, jane] = students;

console.log(john);
console.log(jane);

const { age, name } = jane;
console.log(age);
console.log(name);

// Rest (...)
const [nonYouth, ...youth] = students;
console.log(youth);

const addNumbers = (...numbers) => {
  let sum = 0;

  numbers.forEach((num) => (sum += num));

  return sum;
};

console.log(addNumbers(2, 4, 8)); // 14
console.log(addNumbers(2, 4, 8, 10)); // 24
console.log(addNumbers(2, 4, 8, 10, 20)); // 44

// Spread (...)
const addThreeNumbers = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const numbers = [2, 3, 4];

// Without the spread operator
console.log(addThreeNumbers(numbers[0], numbers[1], numbers[2]));

// With the spread operator
console.log(addThreeNumbers(...numbers));
