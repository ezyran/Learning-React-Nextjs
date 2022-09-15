// variables declared with the 'var' keyword are function-scoped
function var_keyword() {
  if (true) {
    var x = 5;
  }
  console.log(x);
}

// variables declared with the 'const' or 'let' keywords are block-scoped
function const_keyword() {
  if (true) {
    const x = 5;
    console.log(x);
  }
  // console.log(x); // Won't work because 'x' is undefined in this block.
}

function let_keyword() {
  if (true) {
    let x = 5;
    console.log(x);
  }
  // console.log(x); // Won't work because 'x' is undefined in this block.
}

// The 'Window' object encapsulate every declared 'var' variable

const myObj = {
  a: "5",

  foo() {
    console.log(this); // In a named function, 'this' refers to the called object.
  },

  bar: () => {
    console.log(this); // In an arrow function, 'this' refers to the global Window object.
  },
};

// Spread operator
const array = ["0", "1", "2", "3"];
console.log(...array); // '...' is the spread operator : it's used to retrieve a list of parameters from an array or an object

const myBiggerObj = {
  ...myObj,
  b: "10",
};

console.log(myBiggerObj);

// Rest operator : used to pass a list of parameters as an array
function sum(...args) {
  let result = 0;
  for (const arg of args) {
    result += arg;
  }
  return result;
}

console.log(sum(5, 5, 585, 44844));

// Pure function : the function return values are identical for identical arguments,
//                 and that doesn't have any side effects outside its scope.
//                 See https://en.wikipedia.org/wiki/Pure_function
let x = 2;
const add_one = (b) => x + b;
const add_two = (a, b) => a + b;
// The first one is not a pure function. As its result depends on the 'x' variable, its return value
// might change given identical arguments.
// The second one is pure.

// Higher Order Function : Take a function as a parameter, and/or return a function.
//                         See https://en.wikipedia.org/wiki/Higher-order_function
//                         Maybe be used to change the internal behaviour of a function.
const IsValueGreaterThan100 = (value) => value > 100;
const IsValueLesserThan100 = (value) => value < 100;

function filterArray(array, filterFunction) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (filterFunction(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

const randArray = [585, 3487, 17, 85, 455, 12, 99, 100];
console.log(`Array > 100 : ${filterArray(randArray, IsValueGreaterThan100)}`);
console.log(`Array < 100 : ${filterArray(randArray, IsValueLesserThan100)}`);

// Operations on Arrays
const yetAnotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mappedArray = yetAnotherArray.map((value) => value + 10);
let filteredArray = yetAnotherArray.filter((value) => value > 4);
yetAnotherArray.forEach((value) => {
  console.log(value + 10);
});

// Destructuring : Unpack values from array, or properties from objects into distinct variables
//  With an object
const country = {
  name: "Italy",
  pop: 60,
};

const { name, pop } = country;
console.log(name, pop);

//  With an array
const [firstValue, secondValue, ...rest] = yetAnotherArray;
console.log(yetAnotherArray);
console.log(`First value = ${firstValue}`);
console.log(`Secondvalue = ${secondValue}`);
console.log(`The rest = ${rest}`);

// Arrow function that returns the name attribute of the given object.
const getObjectName = ({name}) => name;
// Equivalent to the following function
// function getObjectNameBis(object) {
//     return object.name;
// }
console.log(getObjectName(country));
console.log(getObjectName(myObj)); // Won't work with this one, because it doesn't have a 'name' attribute.
