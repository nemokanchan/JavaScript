// Case 1:::


const userEmail= "K@gmail.com"
if (userEmail) {
    console.log("GOt the user Email");
}else{
    console.log("Don't have userEmail");
    
}


// Case 2:

const usermail = [];
if (usermail) {
  console.log("GOt the user Email");
} else {
  console.log("Don't have userEmail");
}


//FALSY VALUES::::::::::::::::

// false , 0 , -0 , BigInt 0n, "",  null, undefined, NaN

// TRUTHY VALUES ::::::::::::::::::::::::

// "0", "false",  " ", [], {}, function(){}


// Nullish Coalescing Operator (??): null  undefined

let val1;
val1= 5 ?? 10  //Output:5

val1= null ?? 10 //Output : 10 tohandle null and undefined 

console.log(val1);




