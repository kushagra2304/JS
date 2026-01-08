//Operator: they are symbols that perform operations
//Arithmetic Operators: +, -, *, /, %, ++, --
let a = 10;
let b = 3;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // remainder

//ASSIGNMENT OPERATORS: =, +=, -=, *=, /=
let x = 10;

x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2

console.log(x);

//COMPARISON OPERATORS: ==, ===, !=, !==, >, <, >=, <=
let m = 10;
let n = 5;

console.log(m > n);   // true
console.log(m < n);   // false
console.log(m >= n);  // true
console.log(m <= n);  // false
console.log(m === n); // false
console.log(m !== n); // true

//LOGICAL OPERATORS: &&, ||, !
let isAdult = true;
let hasID = false;

true && false; // false
true && true;  // true
true || false; // true
false || false; // false
!true; // false
!false; // true

//if/else
    //basic if
      let age = 20;

if (age >= 18) {
  console.log("You can vote");
}

    //if-else
let age1 = 16;

if (age1 >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
};

//else if 
let marks = 72;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 60) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}


//nested condition
let myAge = 25;
let hasLicense = true;

if (myAge >= 18) {
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("Get a license");
  }
} else {
  console.log("Too young");
}

//ternary operator
let isMember = true;
let discount = isMember ? 20 : 0;
console.log(discount); // 20


//TASKS
//1
let num = 7;
// print "Even" or "Odd"

if (num % 2 === 0) {
    console.log("Even");
}   else {
    console.log("Odd");
}

//2
let username = "admin";
let password = "1234";
// if both match → "Login Success"
// else → "Login Failed"
if (username === "admin" && password === "1234") {
    console.log("Login Success");
}   else {
    console.log("Login Failed");
};   

//3
let amount = 1200;
// >= 1000 → 10% discount
// else → no discount
let discount2 = amount >= 1000 ? amount * 0.10 : 0;
console.log("Discount: " + discount2);

