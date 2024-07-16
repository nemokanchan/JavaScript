const nep_heros=["Rajesh","Nikhil","Aryan","Anmol"]

const ind_heros =["Sarukh","Ranbir","Karthik","AlluArjun"]

// nep_heros.push(ind_heros)
// console.log(nep_heros);
// console.log(nep_heros[3][1]);

// const heros1=nep_heros.concat(ind_heros)
// console.log(heros1);

// const heros2=[...nep_heros,...ind_heros]
// console.log(heros2);




const arry1=[2,5,6,[3,6],3,9,7,[4,7,9],[45,76]]
const arry2=arry1.flat(Infinity)
console.log(arry2);

console.log(Array.isArray("Nemo"));
console.log(Array.from("Nemo"));
console.log(Array.from({name:"Nemo"}));//Imp.

let num1=12
let num2=19
let num3=89

console.log(Array.of(num1,num2,num3));


