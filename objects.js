const student = {
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
        name: "Jane W Junior",
      },
    },
  ],
};

const student2 = {
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
        name: "Jane W Junior",
      },
    },
  ],
};

const student3 = {
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
        name: "Jane W Junior",
      },
    },
  ],
};

const secondChildSpouse = student.children[1].spouse.name;

console.log(secondChildSpouse);

// Two ways to access object values:
// 1. Dot notation
console.log(student.key);
console.log(student.name);
console.log(student.age);
const spouseName = student.spouse.name;
console.log(spouseName);
console.log(student.spouse.age);
