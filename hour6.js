//ARRAYS: ordered collection of values stored in one variable
//without array
let student1 = "Amit";
let student2 = "Rahul";
let student3 = "Neha";

//with array
let students = ["Amit", "Rahul", "Neha"];

//creating array
let num=[1,2,3,4,5];
let fruits=["apple","banana","grapes","mango"];
let mixed=[1,"hello",true,undefined,null]; //can store any type of data

//accessing array elements
console.log(fruits[0]);
console.log(fruits[2]);

//modifying array elements
fruits[1]="orange";
console.log(fruits);    
console.log(fruits.length); //length of array

//array methods
fruits.push("kiwi"); //add element at the end
console.log(fruits);
fruits.pop(); //remove element from the end
console.log(fruits);
fruits.shift(); //remove element from the start
console.log(fruits);
fruits.unshift("strawberry"); //add element at the start

//looping through array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for cleaner loop
for(let fruit of fruits){
    console.log(fruit);
}

// searching in array
let colors=["red","green","blue","yellow"];
console.log(colors.indexOf("blue")); //2
console.log(colors.includes("purple")); //false

//removing elements from specific position
let nums=[10,20,30,40,50];
let part= nums.splice(1,2); //removes 2 elements from index 1
console.log(nums); // [10, 40, 50]
console.log(part); // [20, 30]

//ARRAYS ARE SPEIAL OBJECTS IN JS
console.log(typeof fruits); //object

// TASKS
//sum of array
let numss=[5,10,15,20,25,30];
let sum=0;
for(let n of numss){
    sum+=n;
};
//find maximum
let max=numss[0];
for(let n of numss){
    if(n>max){
        max=n;
    }       
};

//reverse array without using reverse method
let arr=[1,2,3,4,5];
let reversed=[];
for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i]);
}

//reverse arrays with using build in method
arr.reverse();

//COUNT EVEN NUMBER
let numbers=[1,2,3,4,5,6,7,8,9,10];
let count=0;
for(let n of numbers){
    if(n%2===0){
        count++;
    }   
}
console.log(count);