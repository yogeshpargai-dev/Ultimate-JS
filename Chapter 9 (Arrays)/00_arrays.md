# Arrays and Array Methods

One of the most important data structures in JavaScript is the **array**, which is a collection of elements.

In this chapter, we will learn the basics of JavaScript arrays and some commonly used array methods for manipulating them.

---

## 1. What is an Array?

An array in JavaScript is a collection of elements enclosed in **square brackets `[]`**.

The elements of an array can be of any data type, including:

- Numbers
- Strings
- Other arrays

### Example

    var myArray = [1, "Hello", [2, 3]];

Here:

- `1` is a number.
- `"Hello"` is a string.
- `[2, 3]` is another array.

---

# Array Methods

JavaScript provides several built-in methods for manipulating arrays.

The commonly used methods covered in this chapter are:

1. `length`
2. `push()`
3. `pop()`
4. `shift()`
5. `unshift()`
6. `slice()`
7. `splice()`

---

## 2. `length`

The `length` property returns the **number of elements** in an array.

### Example

    var myArray = [1, "Hello", [2, 3]];

    console.log(myArray.length);

### Output

    3

The array contains three elements:

    [1, "Hello", [2, 3]]

So, its length is `3`.

---

## 3. `push()`

The `push()` method is used to **add an element to the end of an array**.

### Example

    var myArray = [1, "Hello", [2, 3]];

    myArray.push("World");

    console.log(myArray);

### Output

    [1, "Hello", [2, 3], "World"]

The `"World"` element is added to the **end** of the array.

---

## 4. `pop()`

The `pop()` method is used to **remove the last element of an array**.

### Example

    var myArray = [1, "Hello", [2, 3], "World"];

    myArray.pop();

    console.log(myArray);

### Output

    [1, "Hello", [2, 3]]

The last element, `"World"`, is removed from the array.

---

## 5. `shift()`

The `shift()` method is used to **remove the first element of an array**.

### Example

    var myArray = [1, "Hello", [2, 3]];

    myArray.shift();

    console.log(myArray);

### Output

    ["Hello", [2, 3]]

The first element, `1`, is removed from the array.

---

## 6. `unshift()`

The `unshift()` method is used to **add an element to the beginning of an array**.

### Example

    var myArray = [1, "Hello", [2, 3]];

    myArray.unshift(0);

    console.log(myArray);

### Output

    [0, 1, "Hello", [2, 3]]

The element `0` is added to the **beginning** of the array.

---

## 7. `slice()`

The `slice()` method is used to **extract a portion of an array**.

### Syntax

    array.slice(start, end);

The `end` index is **exclusive**, meaning the element at the ending index is not included.

### Example

    var myArray = [1, "Hello", [2, 3]];

    console.log(myArray.slice(1, 2));

### Output

    ["Hello"]

Here:

- Starting index = `1`
- Ending index = `2`
- Index `2` is excluded

Therefore, only the element at index `1` (`"Hello"`) is extracted.

---

## 8. `splice()`

The `splice()` method is used to **add or remove elements from an array**.

### Syntax

    array.splice(start, deleteCount, item1, item2, ...);

### Example

    var myArray = [1, "Hello", [2, 3]];

    myArray.splice(1, 1, "Hello World", [4, 5]);

    console.log(myArray);

### Output

    [1, "Hello World", [4, 5], [2, 3]]

### Explanation

    myArray.splice(1, 1, "Hello World", [4, 5]);

Here:

- `1` → starting index
- `1` → number of elements to remove
- `"Hello World"` → element to add
- `[4, 5]` → another element to add

The element `"Hello"` at index `1` is removed, and `"Hello World"` and `[4, 5]` are inserted at that position.

---

# Quick Comparison

| Method | Purpose |
|---|---|
| `length` | Returns the number of elements |
| `push()` | Adds an element to the end |
| `pop()` | Removes the last element |
| `shift()` | Removes the first element |
| `unshift()` | Adds an element to the beginning |
| `slice()` | Extracts a portion of an array |
| `splice()` | Adds or removes elements from an array |

---

# Key Takeaways

- Arrays store a **collection of elements**.
- Arrays are written using **square brackets `[]`**.
- An array can contain different data types.
- `push()` adds to the **end**.
- `pop()` removes from the **end**.
- `shift()` removes from the **beginning**.
- `unshift()` adds to the **beginning**.
- `slice()` extracts a portion of an array.
- `splice()` can **add or remove** elements.
- `length` gives the **number of elements** in an array.


# Loops with Arrays

An **array** stores multiple values. Loops are used to **iterate through each element of an array**.

JavaScript provides several ways to iterate through an array:

- `for` loop
- `forEach()` method
- `for...of` loop

## 1. `for` Loop

The `for` loop is the basic way to iterate through an array. It uses a counter variable that is incremented after each iteration.

```javascript
var myArray = [1, 2, 3, 4, 5];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
```

Here, `i` represents the index of each element.

## 2. `forEach()` Method

The `forEach()` method is a concise way to iterate through an array. It takes a callback function that is executed for each element.

```javascript
var myArray = [1, 2, 3, 4, 5];

myArray.forEach(function(element) {
    console.log(element);
});
```

Here, `element` represents the current element of the array.

## 3. `for...of` Loop

The `for...of` loop allows you to directly access each element without using its index. It can also be used with other iterable objects.

```javascript
var myArray = [1, 2, 3, 4, 5];

for (var element of myArray) {
    console.log(element);
}
```

## Important Note

When iterating through an array using a `for` loop and changing the array during iteration, use a separate counter variable to control the loop properly.