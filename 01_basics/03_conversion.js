let score = "33aa";

// let score = null;  value = 0 , 
// let score = undefined;  value = NaN , 
// let score = true;  value = 1 , 
// let score = "a string";  value = NaN , 

// coming from request
// const {score} = req.body


console.log(typeof (score));


let valueInNumber = Number(score)
let valueInNumber2 = +(score)

console.log(typeof (valueInNumber));
console.log(typeof valueInNumber2);

console.log(valueInNumber2);

// Type of a NaN is number

/*
// Note 
"33" => 33
"33abc" => NaN
*/


let isLoggedIn = "Hitesh";

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "Saleher" => True
