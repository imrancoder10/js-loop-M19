/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


/* Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum exceeds 100*/

// let sum = 0;
// let i = 1;

// while(i<=200){
//     sum+=i;
//     if(sum>=100){  
//         break;
//    }
//     i++; // 13
// }
// console.log(sum);




/* Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches 100*/

let sum = 0;
let i = 1;
while(i<=100){

    if(sum+i>100){
        break;
    }
    else{
        sum+=i;
    }
    i++;
}
console.log(sum);

