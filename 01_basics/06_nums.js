const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 123.879766;
console.log(otherNumber.toPrecision(4));

const hundreads = 1000000;
console.log(hundreads.toLocaleString());
console.log(hundreads.toLocaleString('en-IN'));  //used Indian standards

/// Maths
console.log(Math.abs(-4));           // o/p 4
console.log(Math.round(4.6));        // o/p 5
console.log(Math.ceil(4.5));         // o/p 5
console.log(Math.floor(4.5) );       // o/p 4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));   // o/p 8


console.log(Math.random());       // Return number between 0 to 1
console.log(Math.random() * 10);  // Return number between 0 to 10
console.log((Math.random() * 10) + 1);  // Return number between 1 to 10

// What to do to get number between min and max value  (10-20)

const min = 10;
const max = 20;
console.log(`max-min: ${Math.floor(Math.random() * (max - min + 1)) + min}`);


