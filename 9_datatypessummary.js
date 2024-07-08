// Primitive data types
// 7 types: String, number , Boolean, null , undefined , Symbol, BigInt


const score=100
const scorev=100.3
const isLogged=false
const temp=null
let mailid;

const id=Symbol('123')
const nextid=Symbol('123')

console.log(id === nextid);
const bignum = 24536467685433453n //bigint number


// Reference or non-primitive
// array , objects , functions 

const heros=["Shaktiman","naagraj", "doga"];
let myobj={
    name:"nemo",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");

}

console.log(typeof scorev);
