console.log("JavaScript for-in Loop");

let obj = {
    name : "yogesh",
    cource : "btech",
    cgpa : 7.5
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}