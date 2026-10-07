# JavaScript Functions

Functions are one of the most powerful and important features in JavaScript.

They allow you to:

- Group code together
- Reuse code whenever needed
- Make programs clean
- Make programs modular
- Make programs easier to maintain

In simple words:

> A function is a block of code that runs only when it is called.


# 1. Why Use Functions?

Imagine you have to calculate the square of different numbers multiple times in your program.

Without functions, you would repeat the same lines of code again and again, making the code messy and hard to manage.

Instead, you can create a function once and call it whenever you need it.


# 2. Function Declaration (Regular Function)

A function declaration is the classic way to define a function in JavaScript.

## Syntax

    function functionName(parameters) {
      // code to be executed
    }

### Components

- **functionName** → The name of the function. You’ll use this name to call it.
- **parameters** → Variables that act as placeholders for input values.
- **Code inside `{ }`** → Runs when the function is called.

## Example

    function greet(name) {
      console.log("Hello, " + name + "!");
    }

### Calling a Function

To call the function, simply write its name followed by parentheses:

    greet("Alice"); // Output: Hello, Alice!
    greet("Bob");   // Output: Hello, Bob!

> **Note:** Functions can take any number of parameters — or even none at all.


# 3. Returning Values from Functions

Functions can also return values using the `return` keyword.

## Example

    function add(a, b) {
      return a + b;
    }

    let result = add(5, 10);
    console.log(result); // Output: 15

Here, the function `add()` returns the sum of `a` and `b`.

You can store that returned value in a variable or use it directly.


# 4. Function Expression

A function expression is when you assign a function to a variable.

This is another way to define a function — and it’s especially useful when you want to treat functions like data.

## Syntax

    const variableName = function(parameters) {
      // code to be executed
    };

## Example

    const multiply = function(x, y) {
      return x * y;
    };

    console.log(multiply(4, 5)); // Output: 20

### Key Difference

Unlike function declarations, function expressions are not hoisted.

That means you can’t call them before they are defined in the code.


# 5. Arrow Functions (Modern ES6)

Arrow functions are a shorter and cleaner way to write functions.

They were introduced in ES6 (ECMAScript 2015) and are now widely used.

## Syntax

    const functionName = (parameters) => {
      // code to be executed
    };

## Example

    const square = (x) => {
      return x * x;
    };

    console.log(square(5)); // Output: 25


## 5.1 Shorter Arrow Function

You can make an arrow function even shorter if your function has a single statement and one parameter:

    const double = x => x * 2;

    console.log(double(4)); // Output: 8


## 5.2 Arrow Function Rules

- If there’s only one parameter, you can skip the parentheses.
- If there’s only one statement, you can skip the `{}` and `return`.
- Arrow functions don’t have their own `this`, which makes them great for callbacks and shorter utility functions.


# 6. Comparing Function Types

| Type | Example | Can Be Hoisted? | Syntax Length | `this` Binding |
|---|---|---|---|---|
| Function Declaration | `function greet() {}` | ✅ Yes | Medium | Own `this` |
| Function Expression | `const greet = function() {}` | ❌ No | Medium | Own `this` |
| Arrow Function | `const greet = () => {}` | ❌ No | Short | Inherits `this` |


# 7. Nested Functions

You can also define a function inside another function.

This is called a **nested function**, and the inner function can only be used inside the outer one.

## Example

    function outer() {
      console.log("Outer function running...");

      function inner() {
        console.log("Inner function running...");
      }

      inner(); // Can only be called here
    }

    outer();

## Output

    Outer function running...
    Inner function running...


# 8. Real-World Example

Here’s a simple example showing functions working together:

    function calculateBill(amount, taxRate) {
      function addTax(value) {
        return value + (value * taxRate);
      }

      return addTax(amount);
    }

    console.log(calculateBill(100, 0.05)); // Output: 105

### Explanation

Here:

- The inner function `addTax()` adds tax to the given amount.
- The outer function `calculateBill()` calls it and returns the final value.


# 9. Key Takeaways

- A function is a block of code that runs when it is called.
- Functions help make code reusable, clean, modular, and easier to maintain.
- A **function declaration** is the classic way to define a function.
- Functions can accept **parameters** as input.
- Functions can return values using the `return` keyword.
- A **function expression** assigns a function to a variable.
- Function expressions are not hoisted.
- **Arrow functions** provide a shorter way to write functions.
- Arrow functions were introduced in ES6.
- Functions can be nested inside other functions.
- The inner function of a nested function can only be used inside the outer function.