//Data types 
let age=22 //number
let name="kush"//string

//2. primitive data types
let userAge=25; //number
let userName="sharma"//string
console.log(userName+ "is"+ userAge + "years old");

let isLoggedIn=true; //boolean
let x;
console.log(x); //undefined i.e. no variabled assigned

let y=null; //null means empty value

//3. typeof
console.log(typeof 10); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefiend
console.log(typeof null); //object (bug in js)

//4. dynamic typing
let z=10;
z="kush";
z=true;
//JAVASCRIPT IS NOT SCRICT ABOUT DATA TYPES

//5. type conversion
console.log(4+"4")//44 number to string
console.log(4-"2")//2 string to number
console.log(Number("123")) //string to number

//6. equality operators
console.log(2=="2") //true (loose equality operator)
console.log(2==="2") //false (strict equality operator)

//7. truthy and falsy values;
false
0
""
null
undefined
NaN
//everything else is truthy

//TASK
let a = "10";
let b = 5;

console.log(a + b); // 105
console.log(a - b); // 5
console.log(a * b); //50

let isMember = true;
let discount = isMember ? 20 : 0;

console.log(discount); //20

