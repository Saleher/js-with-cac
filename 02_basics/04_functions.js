// function loginUserMessage(userName = "Unknown User"){
//     if(!userName){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage());


//Rest operators
// function calculatePrice(val1, val2, ...nums){
//     return nums;
// }

// console.log(calculatePrice(2,6,2,6, 9, 10))


const user = {
    userNme: "User One",
    price: 199
}

function handleObject(anyObject){
    console.log(`User Name is ${anyObject.userNme} and price is ${anyObject.prices}`);
}

handleObject(user);

// direct pass object
handleObject({
    userNme : "ABC",
    price: 877
});


const myArray = [30, 40, 50, 60];


function returnElement(getArray){
    return getArray[1]
}

console.log(returnElement(myArray));
