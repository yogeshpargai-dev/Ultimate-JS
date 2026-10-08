// For Loop
let myArray = [1, 2, 3, 4, 5];          
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// For each loop
myArray.forEach(function(element) {
    console.log(element);
});

// For of Loop
for (var element of myArray) {
    console.log(element);
}