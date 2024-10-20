//ES6

class User {
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }

         encryptPassword(){
            return `${this.password}abc`
        }

        changeUSername(){
            return `${this.username.toUpperCase()}`;
     }




    
}

const nemo= new User("nemo","nemo@gmail.com","1234")
console.log((nemo.encryptPassword()));
console.log(nemo.changeUSername());


//behind the scene

function createUser(username, email, password) {
  (this.username)=username
  this.email = email;
  this.password = password;
} 

User.prototype.encryptPassword=function(){
    return `${this.password}abc`;

}

User.prototype.changeUSername = function () {
    return `${this.username.toUpperCase()}`;

};

const bacchu = new User("bacchu", "bacchu@gmail.com", "111111");
console.log(bacchu.encryptPassword());
console.log(bacchu.changeUSername());
