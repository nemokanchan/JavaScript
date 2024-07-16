//type of object :literal,



const sy1= Symbol("Key1")

const jsOb={
    name:"Kanchan",
    age:22,
    [sy1]:"key1",
    loggedIn:true,
    LoggedInDays:["Sunday","Saturday"],
    email:"Kanchan@gmail.com"
}

console.log(jsOb.LoggedInDays);//Inappropriate ways
console.log(jsOb["name"]);
console.log(jsOb[sy1]);

jsOb.age=16
// Object.freeze(jsOb)

jsOb.age=21
console.log(jsOb);


jsOb.fun1 = function(){
    console.log(`Hey! How are you,${this.name}`);
}

console.log(jsOb.fun1 ());
