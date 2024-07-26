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

user.welcomeMsg();
console.log(`From outer: ${this}`);


const addTwo = () => {
    
}