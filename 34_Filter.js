//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// Instead of filter we can use ForEach also


const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);

// Output:::::::  undefined


const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums= myNums.filter( (num) => num>3 );

console.log(newNums)

// OutPut:::::
/*[
  4, 5,  6, 7,
  8, 9, 10
]*/

// Similarly filter function can be defined inside the scope as:
newNums= myNums.filter( (num) => {
    return num>3
} )
console.log(newNums);

// OutPut:::::
/*[
  4, 5,  6, 7,
  8, 9, 10
]*/

// We can use ForEach as::::::::::

const newNum= []
myNums.forEach( (numb) => {
    if( numb>3){
        newNum.push(numb);
    }
} )

console.log(newNum);

// OutPut:::::
/*[
  4, 5,  6, 7,
  8, 9, 10
]*/



// Similarly It can be use for array of Object

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];


let userBook = books.filter( (bk) => bk.genre === "Fiction" );

console.log(userBook)

// Output:::::::::
/* [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
] */

// Also we can perform as
userBook = books.filter( (bk) => { 
    return bk.genre === "Fiction" && bk.publish >= 1985
} )

console.log(userBook)
//Output:::::::::::::
/* [
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
] */

  