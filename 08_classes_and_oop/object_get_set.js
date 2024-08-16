const User = {
    _email : 'sb@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase();
    },


    set email(value){
        this._email = value;
    },

 

}

const newObj = Object.create(User);
console.log(newObj.email)
