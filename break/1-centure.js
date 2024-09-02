/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

// use for loop.......
for(let i = 1; i<=200; i++){
    if(i>100){
        break;
    }
    console.log(i);
}

// alternate of for loop
for(let i = 1; i<=200; i++){
    console.log(i);
    if(i === 100){
        break;
    }
}