/*
Subtask-1:
Display sum of all the odd numbers from 81 to 131.

Subtask-2:
Display sum of all the even numbers from 206 to 311.
*/

//Display sum of all the odd numbers from 81 to 131.
let i = 81;
let sum = 0;
while(i<=131){
    if(i % 2 !==0){
        sum=sum+i;
    }
    i++;
}
console.log('The sum of 81 to 131 is: ', sum);

// Display sum of all the even numbers from 206 to 311.

let a = 206;
let total = 0;
while(a<=311){
    if(a % 2 !== 1){
        total = total + a;
    }
    a++;
}
console.log('The sum of 206 to 311 is: ', total);