let a = Math.floor(Math.random() * 3) + 1;
let b = Math.floor(Math.random() * 3) + 1;
let c = Math.floor(Math.random() * 3) + 1;

if (a==1) {
    var adj = "Crazy";
}
else if (a==2) {
    var adj = "Amazing";
}
else {
    var adj = "Fire";
}


if (b==1) {
    var shop = "Engine";
}
else if (b==2) {
    var shop = "Food";
}
else {
    var shop = "Garments";
}


if (c==1) {
    var another = "Bros";
}
else if (c==2) {
    var another = "Limited";
}
else {
    var another = "Hub";
}


alert(`The Business Name is : ${adj} ${shop} ${another}`)