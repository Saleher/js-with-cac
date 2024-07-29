const userEmail = "abc@gmail.com";


if(userEmail){
    console.log("Got user name");
}else{
    console.log("DONT have user email");
}


// truthy "0", " ", 'false', []

let emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing Operator (??): null undefined
let val1;

// val1 = 5 ?? 10; // 5
// val1 = null ?? 10 // 10


// Terniary Operator
// const iceTeaPrice = 100;
// iceTeaPrice >= 80 ? console.log("less than 80") : console.log("gr");


// for(let i = 0; i <= 10 ; i++){
//     const element = i;
//     if(element === 5){
//         console.log('5 is beast')
//     }
//     console.log(i)
// }




// for(let i = 0; i <= 10; i++){
//     console.log(`OUTER LOOP: ${i}`)
//     for(let j = 0; j <= 10; j++){
//         // console.log(`Inner loop ${j} OUTER LOOP: ${i}`)
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }



let myArray = ['flash', 'batman', 'superman'];

console.log(myArray.length);

for(i=0;i<myArray.length;i++){
    console.log(`${myArray[i]}`)
}


for(let i = 1; i < 10; i++){
    if(i === 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`the value of i is : ${i}`)
}


for(let i = 1; i < 10; i++){
    if(i === 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`the value of i is : ${i}`)
}