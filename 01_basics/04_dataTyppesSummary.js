/*
There are two type of data in Js, based on how data store on memory and how can we access them.
01. Primitive(Value type) and 02. Non Primitive (Reference type)

01. Primitive type
-----------------------------------
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt (Handle very Large number)
7. Symbol
*/

const outsideTemp = null;

let userEmail; // type undefine

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); //false

// const bigInt = 232930844444444448009n;




/*
02. Non-primitive or Reference Type
----------------------------------------
01. Array
02. Object
03. Functions


*** Type of non premitive data type is function
*/


/*
Typeof
01. Undefined => undefine
02. Null => Object
03. Boolean => Boolean
04. Number => Number
05. object => function


*/



const heros = ["Iron Man", "Loki", "Caption America"];

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello World!");
}




// ======================================================
// Primitive data type gose on Stack
// Non-Primitive data Type goes in Heap





let A = "value1";
let B = A;
B = "value2";   //assigned a copy of variable A

console.log(A); // value1
console.log(B); // value2


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;  // assigned the address or reference of userOne

userTwo.userEmail = "user2@yahoo.com";


console.log(userOne.email); // user2@yahoo.com
console.log(userTwo.email); // user2@yahoo.com























