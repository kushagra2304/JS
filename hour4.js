//loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}   
// while loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration: " + j);
    j++;
}
//continue and break
for (let k = 0; k < 10; k++) {
    if (k === 5) {
        continue; // skip the rest of the loop when k is 5
    }
    if (k === 8) {
        break; // exit the loop when k is 8
    }
    console.log("Value of k: " + k);
};

//nested loops
for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 2; b++) {
        console.log("a: " + a + ", b: " + b);
    }
}


//TASKS
//print table of 5
for(let i=0;i<50;i+=5){
    console.log(i);
};

//print sum of firsy 10 even numbers
let sum =0;
for(let i=0;i<=20;i+=2){
    sum += i;
}
console.log("Sum of first 10 even numbers is: " + sum);

//find first number divisible by 7 between 1 to 50
for(let i=1;i<=50;i++){
    if(i%7===0){    
        console.log("First number divisible by 7 is: " + i);
        break;
    }   
};

//skip multiples of 3 between 1 to 30
for(let i=1;i<=30;i++){
    if(i%3===0){
        continue;
    }
    console.log(i);
};