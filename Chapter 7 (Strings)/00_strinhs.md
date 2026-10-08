# Strings and String Methods

Strings are one of the most commonly used data types in JavaScript.

Whether you’re displaying messages, working with user input, or formatting text — strings are everywhere.

A string is simply a sequence of characters (letters, numbers, symbols, or spaces) enclosed in quotes.

You can use:

- Single quotes (`' '`)
- Double quotes (`" "`)
- Template literals (`` ` ` ``)

## Example

    let greeting = "Hello World";
    let name = 'Yogesh';
    let message = `Welcome, ${name}!`;

All three are valid strings.

Template literals (using backticks) are especially useful when you want to include variables or expressions directly inside a string — as in the example above.


# 1. Basic String Properties

Every string in JavaScript comes with built-in properties and methods that help you manipulate and work with text easily.


## 1.1 `length`

The `length` property tells you how many characters a string has, including spaces.

### Example

    let str = "Hello World";
    console.log(str.length); // Output: 11


# 2. Commonly Used String Methods

Let’s explore some of the most popular string methods you’ll use frequently in real-world JavaScript coding.


## 2.1 `concat()`

Combines two or more strings into one.

### Example

    let str1 = "Hello";
    let str2 = " World";

    console.log(str1.concat(str2)); // Output: "Hello World"

While `concat()` works fine, using the `+` operator is often simpler:

    console.log(str1 + str2); // Output: "Hello World"


## 2.2 `indexOf()`

Finds the position (index) of a character or substring within a string.

If the substring doesn’t exist, it returns `-1`.

### Example

    let text = "Hello World";

    console.log(text.indexOf("W")); // Output: 6


## 2.3 `slice()`

Extracts a portion of a string and returns it as a new string.

You can provide a start index and an optional end index.

### Example

    let str = "Hello World";

    console.log(str.slice(6));    // Output: "World"
    console.log(str.slice(0, 5)); // Output: "Hello"


## 2.4 `replace()`

Replaces part of a string with another string.

By default, it replaces only the first occurrence.

### Example

    let sentence = "Hello World";

    console.log(sentence.replace("World", "Universe"));
    // Output: "Hello Universe"

To replace all occurrences, you can use a regular expression with the `g` flag:

    let msg = "apple apple apple";

    console.log(msg.replace(/apple/g, "orange"));
    // Output: "orange orange orange"


## 2.5 `toUpperCase()` & `toLowerCase()`

Convert all characters of a string to uppercase or lowercase.

### Example

    let greeting = "Hello World";

    console.log(greeting.toUpperCase()); // Output: "HELLO WORLD"
    console.log(greeting.toLowerCase()); // Output: "hello world"


## 2.6 `trim()`

Removes unnecessary spaces from the beginning and end of a string.

### Example

    let name = "   Yogesh   ";

    console.log(name.trim()); // Output: "Yogesh"


## 2.7 `split()`

Splits a string into an array based on a specified separator.

### Example

    let fruits = "apple,banana,grape";

    console.log(fruits.split(","));
    // Output: ["apple", "banana", "grape"]