// OBJECT ORIENTED PROGRAMMING

// Object Literal
const objectLiteral = {
  firstName: "John",
  talk: function () {
    return this.firstName + " is talking.";
  },
};

// console.log(firstName); // Won't work because firstName is not a variable that has been defined
console.log(objectLiteral.firstName); // To get to firstName, we have to go through the object

// talk(); // This will also not work because talk is not a function that has been defined in the current scope
console.log(objectLiteral.talk()); // Similarly, we have to go through the object in order to get to the talk method/function

// console.log() // log is a common example of a method that is only accessible through the console object
