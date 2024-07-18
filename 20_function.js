// function sum(num1,num2){      //parameter is recieved
//     return (num1+num2)
// }

// result = sum(2, "a");   //argument is passed

// console.log(result) 


function loggedIn(user){
    if(!user){
        console.log("Please enter the user name");
        return
    }
    return `${user} is logged in `
}

console.log(loggedIn());