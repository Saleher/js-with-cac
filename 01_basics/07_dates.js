// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate) // object

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreateDate = new Date("2023-01-14");
// console.log(myCreateDate.toLocaleDateString());

// let myCreatedDate = new Date("01-14-2025");


// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(Date.now().getTime());

// console.log(Math.floor(Date.now() / 10000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday: "long"
});



