let score ="33abc"
let n=null

console.log(typeof score);
console.log(typeof (score));

let valueInNum = Number(score)
let Num = Number(n);

console.log(typeof score);
console.log( typeof valueInNum);
console.log(valueInNum);
console.log(typeof n);
console.log(typeof Num);
console.log(Num);

//Similarly true is change into number 1


let  IsloggedIn= 1
let booleanIsloggedIn=Boolean(IsloggedIn)
console.log(booleanIsloggedIn);
// let  loggedIn= ""
// let booleanEmpty=Boolean(loggedIn)
// console.log(booleanEmpty);
let loggedIn = "s";
let booleanEmpty = Boolean(loggedIn);
console.log(booleanEmpty);

let num = " "
let stringNumber =String(num)
console.log(stringNumber)

/* Output notes:

 input   convert in number
  "33"    33
  "33abc"  NaN
  true     1
  false    0
  
  input   convet into boolean
  1         true
  0         false
  ""        false
  "s"       true  
 input     convert into string
  33         33
  true       true
  null       null
  ""         true
  " "                */

  


