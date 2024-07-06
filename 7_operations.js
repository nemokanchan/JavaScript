// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

console.log("1"+2);
console.log(1+"2");
console.log(1+2+"2");  //output=32
console.log("1"+2+2);  //output=122

console.log(true);
console.log(+"");   //Output =0
console.log(+true); //Output =1

n1="Hello";
n2=" World";
console.log(n1+n2);

// n3=32
// n3++
// console.log(n3);//33
// ++n3
// console.log(n3);//34

// Better Understanding of postfix and prefix::::

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// REal output: 
// > "x:4, y:3"
// > "a:4, b:4"

