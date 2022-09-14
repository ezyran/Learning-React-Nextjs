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

    bar : () => {
        console.log(this); // In an arrow function, 'this' refers to the global Window object. 
    }
}

// Spread operator 
const array = ["0", "1", "2", "3"];
console.log(...array); // '...' is the spread operator : it's used to retrieve a list of parameters from an array or an object

const myBiggerObj = {
    ...myObj,
    b: "10"
}

console.log(myBiggerObj);

// Rest operator : used to pass a list of parameters as an array
function sum(...args) {
    let result = 0;
    for (const arg of args) {
        result += arg;
    }
    return result;
}

console.log(sum(5,5,585,44844))

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
