function multiplyBy5(num){ 
    return num*5;

}
multiplyBy5.power = 3

console.log(multiplyBy5.power);
console.log(multiplyBy5(6));
console.log(multiplyBy5.prototype);

function createUser(username, score){
      this.username=username;
      this.score=score;

}

createUser.prototype.increaseScore= function(){
    this.score++
}

createUser.prototype.printMe= function(){
    console.log(`The score is ${this.score}`);
    
}


const chai=new createUser("chai",30)
const tea =new createUser("tea", 65)

chai.printMe()