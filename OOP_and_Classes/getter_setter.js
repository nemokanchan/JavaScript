class User{
    constructor(email, password){
        this.email=email;
        this.password=password;

    }
    get email(){
        return this._email.toUpeerCase()
    }
    set email(value){
        this._email=value
    }


    get password(){
        // return this._password.toUpperCase()
        return`00${this._password}123`
    }
    set password(value){
        this._password=value
    }
}

const Kanchan=new User("kanchan@facebook.com", "0987");
console.log(Kanchan.password);
console.log(Kanchan.email);
