/*
Subtask-1:
Display sum of all the odd numbers from 81 to 131.

Subtask-2:
Display sum of all the even numbers from 206 to 311.
*/

//sum of odd number

let sum = 0; 
for(let i = 81; i<=131; i++){
    if(i % 2 === 1){
        sum+=i;
    }
}
console.log('The sum of odd number from 81 to 131 is: ', sum);


// the sum of even number
let s = 0;
for(let a = 206; a<=311; a++){
    if(a % 2 ===0){
        s+=a;
    }
}
console.log('The sum of even number from 206 to 311 is: ',s);