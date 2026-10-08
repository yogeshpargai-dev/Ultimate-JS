console.log("JavaScript arrays methods");

var myArray = [1, "Hello", [2, 3]];

console.log(myArray.toString());

myArray.push("World");
console.log(myArray);

myArray.pop();
console.log(myArray); 

myArray.shift();
console.log(myArray);

myArray.unshift(0);
console.log(myArray);

console.log(myArray.slice(1, 2));

myArray.splice(1, 1, "Hello World", [4, 5]);
console.log(myArray);

let a = [1,2,3];
let b = [4,5,6];
console.log(a.concat(b));