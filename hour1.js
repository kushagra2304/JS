let name="Kusahgra"
console.log(name);

let age=22
console.log(age);
age =32;

if(true){
    var x=10;
}
console.log(x); //10 global scope

if(true){
    let y=8;
}
console.log(y); //error block scope

let a = 10;

if (true) {
  let a = 20;
  console.log(a);
}

console.log(a); //20 10


const pi=3.14
console.log(pi); //3.14 cannot be resaasigned or redeclared

const user={
    name:"Kusahgra",
}
user.name="k"; //const protect the reference not the value


// Use CONST by default
// use LET when you know the value will be changed
// never use VAR

//TASK

let userName="Kushagra";
let userAge=22;
userAge=userAge+1;
console.log(userName+userAge);