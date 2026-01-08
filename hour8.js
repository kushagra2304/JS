//map
//old way
let nums = [1, 2, 3, 4];
let doubled = [];

for (let i = 0; i < nums.length; i++) {
  doubled.push(nums[i] * 2);
}

//new way
let double = nums.map(n => n * 2);
console.log(double); // [2, 4, 6, 8]

//map with objects
let users = [
  { name: "Amit", age: 21 },
  { name: "Neha", age: 23 }
];

let names = users.map(user => user.name);
console.log(names); // ["Amit", "Neha"]

//filter
let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

let adults = users.filter(user => user.age >= 18);
console.log(adults); // [{ name: "Amit", age: 21 }, { name: "Neha", age: 23 }]


//reduce(): turns an array into one value
let sum = nums.reduce((total, n) => total + n, 0);
console.log(sum); // 10

//reduce with objects
let cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 }
];

let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice); // 250

//chaining methods
let userss = [
  { name: "Amit", age: 17 },
  { name: "Neha", age: 22 },
  { name: "Rahul", age: 25 }
];

let namess = userss
  .filter(u => u.age >= 18)
  .map(u => u.name);

console.log(namess);