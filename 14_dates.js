let newDate = new Date()

console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());
console.log(typeof newDate); //Object

let newDate1 = new Date(2024, 0,13)
console.log(newDate1);
console.log(newDate1.toDateString());

let newDate2 = new Date("1-13-2024")
console.log(newDate2);
console.log(newDate2.getMonth());
console.log(newDate2.getDay());
console.log(newDate2.toLocaleDateString());


// Output::
// 2024-07-15T16:32:51.240Z
// Mon Jul 15 2024 22:17:51 GMT+0545 (Nepal Time)
// Mon Jul 15 2024
// 7/15/2024, 10:17:51 PM
// object
// 2024-01-12T18:15:00.000Z
// Sat Jan 13 2024
// 2024-01-12T18:15:00.000Z
// 0
// 6
// 1/13/2024

let myTime= Date.now()

console.log(myTime);//In millisecond
console.log(Math.floor(myTime/1000));//In second

console.log(`${newDate.toLocaleTimeString()} is todays date`);

// output:::
// 1721061540858
// 1721061540
// 10:24:00 PM is todays date
