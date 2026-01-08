//objects: collection of key value pairs
//without objects
let userName = "Kushagra";
let userAge = 22;
let userEmail = "k@gmail.com";

//with objects
let user={
    name: "Kushagra",
    age: 22,
    email: " "
};

//accessing object properties
// dot notation
console.log(user.name);
//bracket notation
console.log(user["age"]);

//updating object properties
// let user1="kush";
// console.log(user1[]);


//obejcts with methods
let user1={
    name: "Kushagra",
    age: 22,
    email: "",
    greet: function(){
        console.log("Hello there!");
    }   

};
user1.greet();

//nested objects
let student = {
  name: "Amit",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student.marks.math);


//array of objects
let users = [
  { name: "Amit", age: 21 },
  { name: "Neha", age: 23 },
  { name: "Rahul", age: 25 }
];
console.log(users[1].name); // amit

// looping through objects
for (let user of users) {
  console.log(user.name, user.age);
}


//looping through object properties
let person = {
  name: "Ravi",
  age: 30,
  city: "Delhi"
};

for (let key in person) {
  console.log(key, person[key]);
}




