const user ={
    name:"Kanchan",
    "age":22,
    welcomeMessage: function(){
        console.log(`${this.name},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.name="Kabin"
// user.welcomeMessage()

// console.log(this)

function one(){
    const username="Asmita"
    console.log(this.username);
}

one()


const chai = ()=>{
    const username = "Asmita";
    console.log(this);

}
chai()


// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }
const addtwo = (num1, num2) => (num1 + num2);

console.log(addtwo(2,7));
const addtwo2 = (num1, num2) => ({name:"Smriti"})


console.log(addtwo2());


const myArray=[3,46,7,8,34,67,32]

myArray.forEach(()=> {})