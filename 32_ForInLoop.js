// For in loops

const myObj={
    js: 'JavaScript',
    cpp: 'c++',
    rb: 'Ruby',
    swift: 'swift by Apple'
}

for (const key in myObj) {
   console.log(myObj[key]);
   
}
// Output:::::::
// JavaScript
// c++
// Ruby
// swift by Apple

for (const key in myObj) {
  console.log(`${key} is shortcut for ${myObj[key]}`);
}

// Output:::::::
// js is shortcut for JavaScript
// cpp is shortcut for c++
// rb is shortcut for Ruby
// swift is shortcut for swift by Apple


const programming = ["js", "Rb", "cpp", "Python"]

for (const key in programming) {
    
        console.log(key);
        
    
}

// Output::::::::::
// 0
// 1
// 2
// 3

for (const key in programming) {
  console.log(programming[key]);
}
// Output:::::::
// js;
// Rb;
// cpp;
// Python;


const map = new Map();

map.set("IN", "INDIA");
map.set("NP", "NEPAL");
map.set("FR", "FRANCE");
map.set("FR", "FRANCE");

for (const key in object) {
     console.log(key);
}

// Output:::::::
// BLANK                   ; Map is not iterable 

