const Numbers = [1,2,3,4,5,6,7,8,9]

const newNum= Numbers.map( (num) => num + 10 )
console.log(newNum)

// Output:::::::::::
/* [
  11, 12, 13, 14, 15,
  16, 17, 18, 19
] */

// Chaining :::::::::
const newNums = Numbers 
                .map( (num) => num *10 )
                .map( (num) => num + 1 )
                .filter( (num) => num < 50 )


console.log(newNums);
// Output:::::::::::
/* [ 11, 21, 31, 41 ] */



// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

// Reduce::::::::::

const myNum = [1,2,3]
let initialValue=0;
let total= myNum.reduce( function (accumulator , currentValue)  {
    return accumulator+currentValue;
}, initialValue )
console.log(total);
// Output:::
// 6



let mytotal= myNum.reduce( function (accumulator , currentValue)  {
    console.log(`Value of accmulator= ${accumulator} and currentValue is ${currentValue}`);
    
    return accumulator+currentValue;
}, initialValue )
console.log(total);
// Output:::
/*  Value of accmulator= 0 and currentValue is 1       
    Value of accmulator= 1 and currentValue is 2       
    Value of accmulator= 3 and currentValue is 3       
    6  */




// For Array of object
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`Total price = ${priceToPay} `);
// Output::::::::::::::::
/* Total price = 22996        */

