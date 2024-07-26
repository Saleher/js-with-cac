//Array 
// const array = [12,  32, 'A' , 89 , 9 , 9];
// // console.log(array[2]);  // A
// // console.log(array['2']); // 
// // console.log(array["02"]); // Undefined

// // filling an empty array
// const fruits = [];

// fruits.push("banaana");
// fruits.push("Apple", "Fig", "Papaya");
// console.log(fruits);

// fruits[5] = "Mango";
// console.log(fruits);
// console.log(fruits.length);



// const colors = ["Red","Green","Blue"];
// colors[5] = "Purple";
// // console.log(`The array : ${colors}`);
// // console.log(colors);

// colors.forEach((item, index) => console.log(`${index} : ${item}`));
// /*
// output
// 0 : Red
// 1 : Green
// 2 : Blue
// 5 : Purple
// */
// console.log(colors.reverse()); // [ 'Purple', <2 empty items>, 'Blue', 'Green', 'Red' ]




/***************************************************************
 * Array Methods
 * ************************************************************/

// 01. array.at();  => takes an integer value and return the item at that index
// const array1 = [5, 12, 8, 130, 44];

// let index = 2; // return 8
// let index2 = -2; // return 130

// const arrRes1 = array1.at(index);
// console.log(arrRes1);


// //02. array.concat(); => Marge two or more array , does not change existing arrays, but return new array.
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', ['newa', 'newb']];
// const arr3 = ['f', 'g', 'h'];

// const newarray = arr1.concat(arr2);

// console.log(newarray);




// // 03. array.copyWithin()  => copyWithin(target, start)
// const array1 = ['a', 'b', 'c', 'd', 'e'];

// const newArray1 = array1.copyWithin(0, 2, 4); // [c', 'd', 'e', 'a']

// console.log(newArray1);
// console.log(array1);



/* 
    array.entries() => instances returns a new array iterator object that contain the key/value pairs for each index.
    Instances returns a new array iterator object that contains the key/value pairs for each index in the array.
*/
// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();
// // console.log(iterator1.next().value);
// // console.log(iterator1.next().value);
// // console.log(iterator1.next().value);


// for(const [index, element] of iterator1){
//     console.log(index, element);
// }


// /* array.every(); 
// => Test whether all** elements in array pass test implemented by provided fuction
// => Returns boolean value
// */

// const isBelowThreshold = (currentValue) => currentValue < 10;

// const array1 = [1, 2, 7, 8, 9, 23];
// console.log(array1.every(isBelowThreshold)); // false


// array.fill();
/*
instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
****** Mutated the original array
*/
// const array1 = [1, 2, 7, 8, 9, 23];
// // console.log(array1.fill(0, 2, 4)); // [1, 2, 0, 0, 9, 23]
// console.log(array1.fill(5, 1));
// console.log(array1);



// array.filter();
/*
=> Creates a shallow copy of a portion of a given array (Do not mutated the original array)
=> Filtered down to just the elements from the given array that passed the test by provided function
*/
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);
// console.log(result);
// console.log(words);


// function isBigEnough(value){
//     return value >= 10
// }

// const filtered = [12, 5, 6, 7, 8, 23, 99].filter(isBigEnough);
// console.log(filtered);

// Find all prime number(divide by number itself only) in array 
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num){
//     for(let i = 2; num > i ; i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return num > 1
// }

// console.log(array.filter(isPrime));


// -----------------------------------
//// Find => return first element in the provided array

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((el) => el > 10);
// console.log(found); // 12



/*******************
 * array.findIndex();
 * returns the index of first element in an array that satisfies the provided function
 * *******************/
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (elem) => elem === 13;
// const foundIndex = array1.findIndex(isLargeNumber);
// console.log(foundIndex);


/*******************
 * array.findLast();
 * reverse the array order and returns the value of the first element that satisfies the provided function
 * *******************/
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
console.log(array1);

























