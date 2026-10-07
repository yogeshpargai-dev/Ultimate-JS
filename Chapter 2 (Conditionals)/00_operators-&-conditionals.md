# JavaScript Operators and Conditional Statements

# 1. Operators

When writing code in JavaScript, you’ll often need to perform operations — whether it’s adding numbers, comparing values, or combining logic. That’s where operators come in.

An operator is simply a symbol that tells JavaScript to perform a specific action on one or more operands (which can be values, variables, or expressions).

### Example

    let sum = 10 + 5; // '+' is the addition operator

Here, the `+` operator adds two numbers together.


## Types of Operators in JavaScript

JavaScript provides many types of operators to perform different kinds of tasks.

The main types covered here are:

1. Arithmetic Operators
2. Comparison Operators
3. Logical Operators
4. Assignment Operators
5. Conditional (Ternary) Operator


## 1.1 Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

| Operator | Description | Example | Result |
|---|---|---|---|
| `+` | Addition | `5 + 2` | `7` |
| `-` | Subtraction | `5 - 2` | `3` |
| `*` | Multiplication | `5 * 2` | `10` |
| `/` | Division | `10 / 2` | `5` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

### Example

    let a = 10;
    let b = 3;
    console.log(a % b); // 1


## 1.2 Comparison Operators

Comparison operators compare two values and return a boolean (`true` or `false`).

| Operator | Description | Example | Result |
|---|---|---|---|
| `==` | Equal to (checks value only) | `5 == "5"` | `true` |
| `===` | Strict equal (checks value & type) | `5 === "5"` | `false` |
| `!=` | Not equal to (checks value only) | `5 != "6"` | `true` |
| `!==` | Strict not equal | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `2 < 5` | `true` |
| `>=` | Greater than or equal to | `5 >= 5` | `true` |
| `<=` | Less than or equal to | `4 <= 3` | `false` |

### Example

    let age = 18;
    console.log(age >= 18); // true


## 1.3 Logical Operators

Logical operators are used to combine multiple conditions.

| Operator | Description | Example | Result |
|---|---|---|---|
| `&&` | Logical AND (true if both are true) | `true && false` | `false` |
| `\|\|` | Logical OR (true if one is true) | `true \|\| false` | `true` |
| `!` | Logical NOT (reverses boolean value) | `!true` | `false` |

### Example

    let age = 20;
    let hasLicense = true;

    if (age >= 18 && hasLicense) {
      console.log("You can drive!");
    }


## 1.4 Assignment Operators

Assignment operators are used to assign values to variables.

The most common one is `=`, but there are shorthand forms for performing operations and assigning at the same time.

| Operator | Description | Example | Equivalent To |
|---|---|---|---|
| `=` | Assigns a value | `x = 5` | — |
| `+=` | Adds and assigns | `x += 5` | `x = x + 5` |
| `-=` | Subtracts and assigns | `x -= 5` | `x = x - 5` |
| `*=` | Multiplies and assigns | `x *= 5` | `x = x * 5` |
| `/=` | Divides and assigns | `x /= 5` | `x = x / 5` |
| `%=` | Modulus and assigns | `x %= 2` | `x = x % 2` |

### Example

    let num = 10;
    num += 5; // same as num = num + 5
    console.log(num); // 15


## 1.5 Conditional (Ternary) Operator

The ternary operator is a shorthand way to write an if-else statement.

### Syntax

    condition ? valueIfTrue : valueIfFalse

### Example

    let age = 17;
    let message = age >= 18 ? "You are an adult" : "You are a minor";
    console.log(message); // "You are a minor"


---

# 2. Conditional Statements

In programming, conditional statements allow your code to make decisions — just like we (humans) do.

They let you execute certain parts of code only when specific conditions are met.

## Main Conditional Structures in JavaScript

The main conditional structures are:

1. `if` and `else`
2. `if...else if...else` (also called if-else ladder)
3. `switch` statement

Let’s explore each of them step by step.


## 2.1 The `if` Statement

The `if` statement is used to run a block of code only if a condition is true.

### Syntax

    if (condition) {
      // code to run if condition is true
    }

### Example

    let age = 20;

    if (age >= 18) {
      console.log("You are eligible to vote.");
    }

### Explanation

Here, the condition `age >= 18` is true, so the message `"You are eligible to vote."` will be printed.

If it were false, the code inside the `if` block would simply be skipped.


## 2.2 The `if...else` Statement

Sometimes you want to run one block of code if the condition is true, and another block if it’s false.

That’s where `else` comes in.

### Syntax

    if (condition) {
      // runs if condition is true
    } else {
      // runs if condition is false
    }

### Example

    let temperature = 25;

    if (temperature > 30) {
      console.log("It’s a hot day!");
    } else {
      console.log("The weather is pleasant.");
    }

### Output

    The weather is pleasant.

### Explanation

Since `temperature > 30` is false, the `else` block executes instead.


## 2.3 The `if...else if...else` Ladder

When you have multiple conditions to check, using just `if` and `else` becomes messy.

That’s where the if-else ladder (also called a chain) helps — you can check several conditions in sequence.

### Syntax

    if (condition1) {
      // code if condition1 is true
    } else if (condition2) {
      // code if condition1 is false and condition2 is true
    } else if (condition3) {
      // code if the above are false but this is true
    } else {
      // code if none of the conditions are true
    }

### Example

    let marks = 72;

    if (marks >= 90) {
      console.log("Grade: A+");
    } else if (marks >= 75) {
      console.log("Grade: A");
    } else if (marks >= 60) {
      console.log("Grade: B");
    } else {
      console.log("Grade: C");
    }

### Output

    Grade: A

### Explanation

The program checks each condition in order.

Since `marks >= 75` is true, it prints `"Grade: A"` and skips the rest.


## 2.4 The `switch` Statement

If you’re comparing a single value against multiple possible options, the `switch` statement is a cleaner alternative to multiple `if...else if` conditions.

### Syntax

    switch (expression) {
      case value1:
        // code if expression === value1
        break;
      case value2:
        // code if expression === value2
        break;
      default:
        // code if none of the above cases match
    }

### Example

    let day = "Tuesday";

    switch (day) {
      case "Monday":
        console.log("Start of the week!");
        break;
      case "Tuesday":
        console.log("Keep going, it’s only Tuesday!");
        break;
      case "Friday":
        console.log("Finally, Friday!");
        break;
      default:
        console.log("Just another day...");
    }

### Output

    Keep going, it’s only Tuesday!

### Explanation

Here, JavaScript checks which case matches the value of `day`.

When it finds `"Tuesday"`, it runs that block and stops at `break`.

Without the `break`, it would continue running the next cases too (a behavior called “fall-through”).


---

# 3. Quick Summary

## Operators

Operators are symbols that tell JavaScript to perform a specific action.

### Main Types

- **Arithmetic Operators** → Perform mathematical calculations.
- **Comparison Operators** → Compare two values and return `true` or `false`.
- **Logical Operators** → Combine multiple conditions.
- **Assignment Operators** → Assign values to variables.
- **Conditional (Ternary) Operator** → A shorthand way to write an `if-else` statement.


## Conditional Statements

Conditional statements allow JavaScript programs to make decisions based on conditions.

### Main Types

- **`if`** → Executes code when a condition is true.
- **`if...else`** → Executes one block when true and another when false.
- **`if...else if...else`** → Checks multiple conditions in sequence.
- **`switch`** → Compares a single value against multiple possible options.