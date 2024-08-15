class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }



    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }

}

const sal = new Teacher("saleher", "sa@gmail.com", "123");

sal.addCourse();

const user2 = new User("UserTwo");


user2.logMe();


console.log(sal instanceof Teacher);