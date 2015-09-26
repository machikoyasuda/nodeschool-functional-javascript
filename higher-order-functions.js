// A higher order function does at least one:
// 1 - take one or more functions as an input
// 2 - output a function

// All other functions are first-order functions.

// First-class functions: functions treated as any other value in JS, used as variables, properties on objects, or passed to other functions as arguments. Function values are actually Objects, inheriting from Function.prototype, so you can even add properties and store values on them.

// Key difference between Functions and other value types in JS: if a reference to a function is followed by () and some optiona comma-separated values, then the function body will be executed with the arguments (if any).

// Task: Implement a function that takes a function as its first arg, a number num as its second, and then executes the passed in function num times.

// function repeat(operation, num) {
//   for (var i = 0; i < num; i++) { operation(); }
// }

function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

// Do not remove the line below
module.exports = repeat
