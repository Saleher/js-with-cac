const user = {
    username: "Saleher",
    price: 999,
    welcomeMsg: function(){
        console.log(`Hello ${this.username}`)
        console.log(this);
    }
}

// user.welcomeMsg();
// user.username = "Begum";

// user.welcomeMsg();
// console.log(`From outer: ${this}`);


// const addTwo = (num1, num2) => ({username: "saleher"});

// console.log(addTwo(3, 4));



// IIFE Immediately Invoked Function Expression 
// The function that execute immidiatly after 
// We use IIFE for avoid global plution

// (function myIfe(){
//     console.log(`DB Connected`);
// })();





(function myFun(){
    // Named IIFE
    console.log(`DB Connected`);
})();


((name) => {
    console.log(`DB Connected 2 ${name}`);
})("Name here");










