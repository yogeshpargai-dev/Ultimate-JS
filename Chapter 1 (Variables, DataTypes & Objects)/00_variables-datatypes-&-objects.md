# JavaScript Variables and Data Types

## 1. What Are Variables?

In JavaScript, variables are used to store data.

You can think of a variable like a container or a box that holds information. You can put something inside it, take it out, or even replace it with something new later.

### Example

    var name = "Yogesh";
    var age = 20;

Here, `name` and `age` are variables that store the values `"Yogesh"` and `20`.

Variables allow you to:

- Store data
- Retrieve data
- Manipulate data

This makes variables one of the most important concepts in any programming language.


# 2. Declaring Variables

In JavaScript, there are three main ways to declare variables:

1. Using `var`
2. Using `let`
3. Using `const`


## 2.1 Using `var`

The `var` keyword is the oldest way to declare a variable in JavaScript.

### Example

    var x = 10;

This creates a variable named `x` and assigns the value `10` to it.

You can also declare it first and assign a value later:

    var x;
    x = 10;


## 2.2 Using `let`

The `let` keyword was introduced in ES6 (ECMAScript 2015).

It’s the modern and recommended way to declare variables that can change their values later.

### Example

    let count = 5;
    count = 10; // works fine

You can reassign a `let` variable, but you cannot redeclare it in the same scope.

### Example

    let name = "Harry";
    let name = "CodeWithHarry"; // This will throw an error


## 2.3 Using `const`

The `const` keyword is used to declare constants — variables whose values cannot be changed once assigned.

### Example

    const pi = 3.14;
    pi = 3.14159; // Error: Assignment to constant variable

You must assign a value to a `const` variable at the time of declaration — leaving it empty will also cause an error.

### Example

    const num; // Error

However, if the constant holds an object or array, the contents of that object can still change (only the reference is constant).

### Example

    const arr = [1, 2, 3];
    arr.push(4); // Works fine
    console.log(arr); // [1, 2, 3, 4]


# 3. Data Types: Primitives and Objects

When working with JavaScript, it’s important to understand the types of data you’ll be dealing with.

Every value in JavaScript belongs to one of two categories:

1. Primitive types
2. Object types

Knowing the difference between them is key to writing clean, efficient, and bug-free code.


# 4. Primitives – The Building Blocks

Primitive data types are the most basic and fundamental types in JavaScript.

They represent single, immutable values — meaning their actual value cannot be changed once created.


## 4.1 Primitive Data Types

Here are the primitive types in JavaScript:

| Data Type | Description | Example |
|---|---|---|
| **Number** | Represents numeric values | `10`, `3.14` |
| **String** | Represents text enclosed in quotes | `"hello"`, `'world'` |
| **Boolean** | Represents logical values | `true`, `false` |
| **Null** | Represents an intentional absence of a value | `null` |
| **Undefined** | Represents a variable that has been declared but not assigned a value | `undefined` |
| **Symbol** | Represents a unique and immutable value (added in ES6) | `Symbol()` |
| **BigInt** | Used for very large numbers beyond the safe integer limit (added in ES2020) | `123n` |


## 4.2 Example: Primitive Behavior

    let x = 10;
    x = 20; // x now holds a new value

In this example, when we change the value of `x`, JavaScript doesn’t modify the existing value (`10`).

Instead, it creates a new primitive value (`20`) and assigns it to the variable `x`.

That’s why primitives are considered immutable — their actual values can’t be altered once they exist.


# 5. Objects – The Complex Data Type

Objects in JavaScript are more powerful and flexible.

They can store multiple pieces of data and represent real-world entities like:

- Users
- Cars
- Products

An object is made up of **key-value pairs**, where:

- **Keys** are usually strings.
- **Values** can be any type, including other objects or primitives.


## 5.1 Example: Object Basics

    let person = { name: "John", age: 30 };
    person.age = 31; // Modifies the existing object

Here, we updated the `age` property of the `person` object.

Unlike primitives, objects are mutable, so their contents can be changed without creating a new object.


# 6. Other Object Types

In JavaScript, several built-in data structures are also classified as objects.


## 6.1 Arrays

Arrays are used to store ordered collections of data.

### Example

    let colors = ["red", "green", "blue"];


## 6.2 Functions

Functions are special kinds of objects that can be invoked.

### Example

    function greet() {
      console.log("Hello!");
    }


## 6.3 Dates

Dates are used to work with date and time.

### Example

    let today = new Date();


# 7. Quick Comparison

| Feature | Primitives | Objects |
|---|---|---|
| Basic nature | Basic and fundamental | More powerful and flexible |
| Values | Single values | Multiple pieces of data |
| Mutability | Immutable | Mutable |
| Can represent real-world entities | No | Yes |
| Examples | Number, String, Boolean, Null, Undefined, Symbol, BigInt | Arrays, Functions, Dates, Objects |


# 8. Key Takeaways

- Variables are used to store, retrieve, and manipulate data.
- JavaScript provides `var`, `let`, and `const` for declaring variables.
- Primitive data types represent single, immutable values.
- JavaScript primitive types include:
  - Number
  - String
  - Boolean
  - Null
  - Undefined
  - Symbol
  - BigInt
- Objects can store multiple pieces of data.
- Objects are made up of key-value pairs.
- Objects are mutable, meaning their contents can be changed.
- Arrays, Functions, and Dates are classified as objects.