// ES6

class User {
    constructor(username, email, password){
        this.username  = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUderName(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("Saleher", "saleher@gmail.com", '123');

console.log(userOne.encryptPassword());
console.log(userOne.changeUderName());


// Behind the scene
// function User(username, email, password){
//     this.username  = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//      return `${this.password}abc`
// }

// console.log(userOne.encryptPassword());
// console.log(userOne.changeUderName());