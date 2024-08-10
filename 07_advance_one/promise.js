const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB Calls , cryptography
    setTimeout(function(){
        console.log('Async one is complete');
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
});


// 2 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
});

// Promise 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'User1', email: 'user1@gmail.com'})
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user)
})


// Promise four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Saleher", password: "12345"});
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((uername ) => {
    console.log(uername);
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("The Promise the either resolve or rejected")
});



// Promise five  (using async await)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JS", password: "123"});
        }else{
            reject('ERROR: JS went wrong');
        }
    }, 1000)
});


async function consumePromiseFive() {
   try {
        const response = await promiseFive;     
    console.log(response);
   } catch (error) {
        console.log(error);
   }
}
consumePromiseFive();



//

// async function getAllUser() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//    } catch (error) {
//         console.log("E: ", error);
//    }
// }

// getAllUser();


fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))