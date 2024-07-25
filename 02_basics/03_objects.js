// singalton => Object.create()


//Object literals 

const mySym = Symbol("key1");
const jsUser = {
    name : 'Saleher',
    email: 'saleher@gmail.com',
    phone: 1000000,
    [mySym]: "myKey1"
    // full Name: dkkdfh,
}


// console.log(jsUser['email']);
// console.log(jsUser[mySym]);
// console.log(typeof mySym);

// jsUser.email = "abc@gmail.com";
// console.log(jsUser);

jsUser.greetings = function(){
    console.log(`Hello ${this.name}`);
}



// console.log(jsUser.greetings);
// console.log(jsUser.greetings());



// const obj1 = {
//     1: "a",
//     2: "b"
// }

// const obj2 = {
//     3: "c",
//     4: "d"
// }

// console.log(obj1[1]);
// console.log(obj1[2]);

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({} , obj1, obj2);
// console.log(obj3);
// console.log(obj1);

// const object3 = {...obj1, ...obj2};



// const users = [
//     {
//         userId: 1,
//         userName: 'User1'
//     },
//     {
//         userId: 2,
//         userName: 'User2'
//     },
//     {
//         userId: 3,
//         userName: 'User3'
//     },
//     {
//         userId: 4,
//         userName: 'User4'
//     },
// ]

// console.log(users[5].userId);


// const tinUser = {
//     id: '123abc',
//     name: 'Sammy',
//     isLoggedIn: false
// }

// console.log(tinUser);


// console.log(Object.keys(tinUser)); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.values(tinUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.entries(tinUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


// console.log(tinUser.hasOwnProperty('isLoggedIn'));


// Destructureing

const course2 = {
    name: 'Course',
    price: "999",
    tutor: "Tutor1"
}

// course.tutor

const {tutor} = tutor;
console.log(tutor);
 







