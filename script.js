// Task 1: Calculate the square root of a given number
function calculateSquareRoot(number) {
  return Math.sqrt(number);
}
console.log(`Square root of 16: ${calculateSquareRoot(16)}`);

// Task 2: Generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(`Random number between 1 and 10: ${generateRandomNumber()}`);

// Task 3: Convert a string representation of a number to an actual number
function convertStringToNumber(str) {
  return Number(str);
}
console.log(`Converted '42' to number: ${convertStringToNumber("42")}`);

// Task 4: Check if a value is not a number
function isValueNaN(value) {
  return isNaN(value);
}
console.log(`Is "Hello" NaN? ${isValueNaN("Hello")}`);

// Task 5: Convert a number to a string
function convertNumberToString(num) {
  return num.toString();
}
console.log(`Converted 123 to string: ${convertNumberToString(123)}`);

// Task 1: Use arrow functions to calculate the square of a given number
const calculateSquare = (num) => num ** 2;
console.log(`Square of 5: ${calculateSquare(5)}`);

// Task 2: Use arrow function with a different name
const getSquare = (x) => x * x;
console.log(`Square of 7: ${getSquare(7)}`);

// Task 3: Use template literals to create a welcome message
const createWelcomeMessage = (name, age) =>
  `Welcome, ${name}! You are ${age} years old.`;
console.log(createWelcomeMessage("Alice", 30));

// Task 4: Use another function for template literals
const generateGreeting = (name, age) =>
  `Hi ${name}, you’re ${age} years young!`;
console.log(generateGreeting("Bob", 25));

// Task 5: Destructuring person object
const person1 = { firstName: "John", lastName: "Doe" };
const { firstName: fName, lastName: lName } = person1;
console.log(`First Name: ${fName}, Last Name: ${lName}`);

// Task 6: Destructure another object
const person2 = { firstName: "Jane", lastName: "Smith" };
const { firstName: first, lastName: last } = person2;
console.log(`First Name: ${first}, Last Name: ${last}`);

// Task 7: Merge two arrays using spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray1 = [...array1, ...array2];
console.log(`Merged Array 1: ${mergedArray1}`);

// Task 8: Merge arrays again
const mergedArray2 = [...array2, ...array1];
console.log(`Merged Array 2: ${mergedArray2}`);

// Task 9: Default parameters for rectangle area
const calculateArea = (length = 1, width = 1) => length * width;
console.log(`Area (default): ${calculateArea()}`);
console.log(`Area (5x4): ${calculateArea(5, 4)}`);

// Task 10: Another default parameter function
const computeArea = (l = 2, w = 3) => l * w;
console.log(`Area (default 2x3): ${computeArea()}`);
console.log(`Area (6x7): ${computeArea(6, 7)}`);

// Task 11: Create a Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
const person3 = new Person("Charlie", 40);
person3.introduce();

// Task 12: Another class for variety
class User {
  constructor(username, years) {
    this.username = username;
    this.years = years;
  }

  introduceUser() {
    console.log(`Hey, I'm ${this.username}, ${this.years} years here.`);
  }
}
const user1 = new User("Dave", 28);
user1.introduceUser();
