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


/* array.every(); 
=> Test whether all** elements in array pass test implemented by provided fuction
=> Returns boolean value
*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 2, 7, 8];













