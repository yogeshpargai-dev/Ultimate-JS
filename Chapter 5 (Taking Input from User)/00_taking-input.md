# Taking Input from the User in JavaScript

In JavaScript, taking input from the user means allowing the user to enter data that can be used by the program.

When JavaScript is running in a browser, the simplest way to take input from the user is by using the `prompt()` function.

---

# 1. Using `prompt()`

The `prompt()` function displays a dialog box that asks the user to enter some information.

## Syntax

    prompt("Enter something:");

The value entered by the user is returned by `prompt()`.

### Example

    let name = prompt("Enter your name:");

    console.log("Hello, " + name);

If the user enters:

    Yogesh

The output will be:

    Hello, Yogesh

---

# 2. Important: `prompt()` Returns a String

One important thing to remember is that `prompt()` returns the user's input as a **string**.

For example:

    let a = prompt("Enter first number:");
    let b = prompt("Enter second number:");

    console.log(a + b);

If the user enters:

    10
    20

The output will be:

    1020

This happens because `"10"` and `"20"` are strings, so JavaScript joins them together instead of performing addition.

To perform mathematical operations, we need to convert the input into a number.

---

# 3. `Number()`

`Number()` converts a value into a number.

## Syntax

    Number(value)

### Example

    let number = Number(prompt("Enter a number:"));

    console.log(number);

If the user enters:

    25

The value stored in `number` will be:

    25

### Example with Addition

    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    console.log(a + b);

If the user enters:

    10
    20

Output:

    30

---

# 4. `parseInt()`

`parseInt()` is used to convert a value into an **integer**.

An integer is a whole number without a decimal part.

## Syntax

    parseInt(value)

### Example

    let age = parseInt(prompt("Enter your age:"));

    console.log(age);

If the user enters:

    20

The value stored in `age` will be:

    20

### Decimal Example

    let number = parseInt("25.75");

    console.log(number);

Output:

    25

`parseInt()` takes the integer part and removes the decimal part.

---

# 5. `parseFloat()`

`parseFloat()` is used to convert a value into a **floating-point number**, meaning a number that can contain decimal values.

## Syntax

    parseFloat(value)

### Example

    let height = parseFloat(prompt("Enter your height:"));

    console.log(height);

If the user enters:

    6.2

The value stored in `height` will be:

    6.2

### Example

    let number = parseFloat("25.75");

    console.log(number);

Output:

    25.75

---

# 6. Difference Between `Number()`, `parseInt()` and `parseFloat()`

| Method | Purpose | Example | Result |
|---|---|---|---|
| `Number()` | Converts a value into a number | `Number("25")` | `25` |
| `parseInt()` | Converts a value into an integer | `parseInt("25.75")` | `25` |
| `parseFloat()` | Converts a value into a decimal number | `parseFloat("25.75")` | `25.75` |

---

# 7. Taking Different Types of Input

## String Input

Use `prompt()` directly when you want text.

    let name = prompt("Enter your name:");

---

## Number Input

Use `Number()` when you want a number.

    let number = Number(prompt("Enter a number:"));

---

## Integer Input

Use `parseInt()` when you want an integer.

    let age = parseInt(prompt("Enter your age:"));

---

## Decimal Input

Use `parseFloat()` when you want a decimal number.

    let height = parseFloat(prompt("Enter your height:"));

---

# 8. Quick Summary

### `prompt()`

- Takes input from the user.
- Returns the input as a string.

### `Number()`

- Converts the input into a number.
- Can be used for integers and decimal numbers.

### `parseInt()`

- Converts the input into an integer.
- Removes the decimal part.

### `parseFloat()`

- Converts the input into a floating-point number.
- Preserves the decimal part.

