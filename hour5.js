// function: reusable code of code
//without function
let a = 10;
let b = 20;
console.log(a + b);

let c = 5;
let d = 7;
console.log(c + d);

//with function
function sum(x, y) {
  return x+y;
}
console.log(sum(10, 20));
console.log(sum(5, 7));

//function calling
let res=sum(15,24);
console.log(res);

//parameter vs argument
function greet(name){ //parameter
    console.log("Hello " + name);
}
greet("Alice"); // argument 
//parameters are placeholders whereas arguments are actual values

//default parameters: prevents undefined
function greet(name = "User") {
  console.log("Hello " + name);
}
greet();        // Hello User
greet("Amit");  // Hello Amit


//function expression: function stored in a variable
const mul=function(a,b){
    return a*b;
}
console.log(mul(4,5));

//arrow function: shorter syntax
const divide = (a, b) => {
    return a / b;
} //cleaner and used heavily in react also used in place of lexical this


// functions calling functions

function isEven(num){
    return num%2===0;
}
function check(num){
    if(isEven(num)){
        return "Even";

    } else{
        return "Odd";
    }

}
console.log(check(4));

//scopes in fun
let globalVar = "I am global";

function test(){
    let localVar = "I am local";
    console.log(globalVar); // accessible
}   
test();
//console.log(localVar); // error not accessible


//TASKS
//1. even or odd
function isEvenTask(num){
   if(num%2===0){
    return true;
   } else{
    return false;
   }
};

//max of two numbers
function maxofTwo(a,b){
    if(a>b) {
        return a;
    }else {
        return b;
    }
}