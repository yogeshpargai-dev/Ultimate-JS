# JavaScript Loops

Loops are used when you want to repeat a block of code multiple times.

Instead of writing the same code again and again, you can use loops to make your code shorter, cleaner, and more efficient.

## Types of Loops in JavaScript

The commonly used loops are:

1. `for` loop
2. `for...in` loop
3. `for...of` loop
4. `while` loop
5. `do...while` loop


# 1. The `for` Loop

The `for` loop is the most commonly used loop when you know how many times you want to run your code.

## Syntax

    for (initialization; condition; increment/decrement) {
      // code to be executed
    }

### Parts of a `for` Loop

- **Initialization:** Runs once before the loop starts. It is usually used to declare a counter variable.
- **Condition:** Checked before every iteration. If it is `true`, the loop runs. If it is `false`, the loop stops.
- **Increment/Decrement:** Updates the counter variable after each iteration.

## Example

    for (let i = 1; i <= 5; i++) {
      console.log("Count:", i);
    }

## Output

    Count: 1
    Count: 2
    Count: 3
    Count: 4
    Count: 5

### Explanation

The loop starts with `i = 1`. Each time it runs, `i` increases by `1` until `i <= 5` becomes `false`.


# 2. The `for...in` Loop

The `for...in` loop is used to iterate over the properties of an object.

## Syntax

    for (variable in object) {
      // code to be executed
    }

## Example

    let person = {
      name: "Alice",
      age: 25,
      job: "Designer"
    };

    for (let key in person) {
      console.log(key + ": " + person[key]);
    }

## Output

    name: Alice
    age: 25
    job: Designer

### Explanation

Each time the loop runs, `key` takes the name of one property, such as `"name"`, `"age"`, etc.

You can access its value using `person[key]`.


# 3. The `for...of` Loop

The `for...of` loop is used to iterate over iterable objects like arrays, strings, or sets.

## Syntax

    for (variable of iterable) {
      // code to be executed
    }

## Example

    let colors = ["red", "green", "blue"];

    for (let color of colors) {
      console.log(color);
    }

## Output

    red
    green
    blue

### Explanation

Here, `color` takes each element of the array one by one.


# 4. The `while` Loop

The `while` loop is used when you don’t know in advance how many times you want to run your code.

It keeps running as long as the condition remains `true`.

## Syntax

    while (condition) {
      // code to be executed
    }

## Example

    let i = 1;

    while (i <= 5) {
      console.log("Number:", i);
      i++;
    }

## Output

    Number: 1
    Number: 2
    Number: 3
    Number: 4
    Number: 5

### Explanation

The loop checks the condition `i <= 5` each time before executing.

- If it is `true`, the code runs.
- If it is `false`, the loop stops.

> **Important:** If you forget to update `i`, it can lead to an infinite loop.

## Real-world Example

    let answer = "";

    while (answer !== "yes" && answer !== "no") {
      answer = prompt("Please enter 'yes' or 'no':");
    }

This loop keeps asking the user for input until they type either `"yes"` or `"no"`.


# 5. The `do...while` Loop

The `do...while` loop is very similar to the `while` loop.

The main difference is that the `do...while` loop executes the code **at least once**, even if the condition is `false`.

## Syntax

    do {
      // code to be executed
    } while (condition);

## Example

    let i = 1;

    do {
      console.log("Value:", i);
      i++;
    } while (i <= 5);

## Output

    Value: 1
    Value: 2
    Value: 3
    Value: 4
    Value: 5

### Explanation

The `do` block runs first, and then the condition is checked.

- If the condition is `true`, the loop runs again.
- If the condition is `false`, the loop stops.
- Even if the condition is false from the start, the code still runs once.


## Example When the Condition Is False Initially

    let x = 10;

    do {
      console.log("This will run once!");
      x++;
    } while (x < 5);

## Output

    This will run once!

Even though `x < 5` is `false`, the message still prints once because of the `do...while` behavior.


# 6. Quick Comparison

| Loop | Main Use |
|---|---|
| `for` | When you know how many times the loop should run |
| `for...in` | To iterate over the properties of an object |
| `for...of` | To iterate over values of iterable objects |
| `while` | When the number of iterations is not known in advance |
| `do...while` | When the code must execute at least once |


# 7. Key Takeaways

- Loops are used to repeat a block of code.
- The `for` loop is commonly used when the number of iterations is known.
- The `for...in` loop is used to iterate over object properties.
- The `for...of` loop is used to iterate over values of iterable objects.
- The `while` loop continues as long as its condition is `true`.
- The `do...while` loop executes its code at least once before checking the condition.
- Always make sure the loop condition can eventually become `false` to avoid an infinite loop.