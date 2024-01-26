const sum = (x , y) => x + y;
const substraction = (x , y) => x - y;
const multiply = (x , y) => x * y;
const divide = (x , y) => x / y;
const square = (x ) => x*x;
const PI = 3.14;

// module.exports = 123;

let obj = {
    sum :sum,
    substraction :substraction,
    multiply:multiply,
    divide:divide,
    sqr :square,
    PI :PI
}

module.exports = obj;