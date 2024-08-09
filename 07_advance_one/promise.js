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