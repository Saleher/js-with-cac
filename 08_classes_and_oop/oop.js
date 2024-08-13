// 01. Abstraction example 
class Car {
    constructor(brand, modal){
        this.brand = brand;
        this.modal = modal;
    }
    startEngine(){
        console.log("Engine Started");
    }
    drive(){
        console.log("Driving the car");
    }
}

// Usage
const myCar = new Car('Toyato', 'Corolla');
myCar.startEngine();
myCar.drive();



// Encapsulation
class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    //Getter the name
    getName(){
        return this._name;
    }

    //Setter name
    setName(newName){
        this._name = newName;
    }


    // Getter the age
    getAge(){
        return this._age;
    }

    // setter age 
    setAge(newAge){
        if(newAge > 0){
            this._age = newAge;
        }else{
            console.log('Age should be greater than 0')
        }
    }
}
const person = new Person('John', 30);
console.log(`Person Name : ${person.getName()}`)
person.setAge(31);
console.log(`Person Age: ${person.getAge()}`);



// Inheritence
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes noise`);
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} bark`);
    }
}

const dog = new Dog('Rex');
dog.speak();



// Polymorphisam








const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// const userOne = new user('Test1');
// console.log(userOne)


// console.log(user.username);
// console.log(user['loginCount']);
// console.log(user.getUserDetails());


// const peomiseOne = new Promise();
// const date = new Date();


function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User('NameOne', 12, true);
console.log(userOne);






