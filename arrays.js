// Array methods
let arr = []; // empty array
const arr2 = [34, "string", true, [], {}, null, undefined]; // array with elements of different types
const arr3 = ["this", "is", "a", "string", "array"]; // array of strings

// ADDING ELEMENTS TO AN ARRAY
// console.log(arr);

// 1. push() - append/add to the end of the array
// console.log("Using Push:");

// arr.push("element one");
// console.log(arr);
// arr.push("element two");
// console.log(arr);
// arr.push(77, true);

// console.log(arr);

// arr = [];

// 2. unshift()
// console.log("Using Unshift");

// arr.unshift("element one");
// console.log(arr);
// arr.unshift("element two");
// console.log(arr);
// arr.unshift(77, true);

// console.log(arr);

// GETTING/ACCESSING ELEMENTS IN AN ARRAY

// 1. Using the index of the array with the square bracket notation
// console.log("Second element: ", arr2[1]);
// console.log("Third element: ", arr2[2]);

// 2. at()
// console.log("Second element using at(): ", arr2.at(1));
// console.log("Third element using at(): ", arr2.at(2));

// 3. find()
const numArray = [23, 77, 1, 5, 25, 90, 78, 55];
const el = numArray.find((num) => {
  return num < 20;
});

// console.log(el);

// 4. indexOf()
// console.log(numArray.indexOf(el));

// 5. forEach()
// console.log(numArray[0]);
// console.log(numArray[1]);
// console.log(numArray[2]);
// console.log(numArray[3]);
// console.log(numArray[4]);
// console.log(numArray[5]);

// numArray.forEach((num, i) => {
//   console.log(i);

//   console.log(num);
// });

// 6. map()

// 7. slice()
console.log(numArray.slice(3, 7));

console.log(numArray);

// [77, 1, 5, 25]
console.log(numArray.slice(undefined, 5));

// REMOVING AN ELEMENT FROM AN ARRAY
const testArr = [23, 56, 87, 12];

console.log("Before pop ", testArr);

// 1. pop()
testArr.pop();

console.log("After pop ", testArr);

// 2. shift()
testArr.shift();

console.log("After shift ", testArr);

// CHANGING/UPDATING/REPLACING ELEMENTS IN AN ARRAY

// 1. splice()

const arrayToSplice = [34, 21, 77, 6, 23];

let newArr = arrayToSplice.splice(1, 3, 56, 2); // this will remove three elements starting from the element at position 1, and add the elements 56 and 2 in place of the removed elements

console.log(arrayToSplice);
console.log(newArr);

// PRACTICE PROBLEMS
// get the elements that are not in positions 1, 3 and 4
const arrayToFilter = [34, 21, 77, 6, 23];
const excludePositions = [1, 3, 4];

// Create a new array using those elements
const newArray = arrayToFilter.filter((el, i) => {
  return !excludePositions.includes(i);
});

console.log(newArray);

const students = [
  {
    key: "value",
    name: "John Wick",
    age: 47,
    isMarried: true,
    spouse: {
      name: "Jane Wick",
      age: 43,
      father: {
        name: "Dad Jane Wick",
      },
      mother: {
        name: "Mom Jane Wick",
      },
    },
    children: [
      {
        name: "JW Junior",
        age: 27,
      },
      {
        name: "JW Junior the Second",
        age: 25,
        spouse: {
          name: true,
        },
      },
    ],
  },

  {
    key: "value",
    name: "John Wick",
    age: 47,
    isMarried: true,
    spouse: {
      name: "Jane Wick",
      age: 43,
      father: {
        name: "Dad Jane Wick",
      },
      mother: {
        name: "Mom Jane Wick",
      },
    },
    children: [
      {
        name: "JW Junior",
        age: 27,
      },
      {
        name: "JW Junior the Second",
        age: 25,
        spouse: {
          name: true,
        },
      },
    ],
  },
];

students[0].children[0];
