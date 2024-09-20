const coding = ["js", "ruby", "cpp", "python", "java"]

coding.forEach( function (item) {
    console.log(item);
    
} )

// Output:::::::::
// js;
// ruby;
// cpp;
// python;
// java;

// Similarly we can use array function as well 
coding.forEach( (item) => {
    console.log(item);
    
} )

// Same Output

// also we can perform above function as 

function printMe(item) {
    console.log(item);
    
}

coding.forEach(printMe)

// Output:::::::::Same

coding.forEach((item, index, arrayList) => {
  console.log(item, index , arrayList);
});

// Output:::::::::::

/* js 0 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
ruby 1 [ 'js', 'ruby', 'cpp', 'python', 'java' ]   
cpp 2 [ 'js', 'ruby', 'cpp', 'python', 'java' ]    
python 3 [ 'js', 'ruby', 'cpp', 'python', 'java' ] 
java 4 [ 'js', 'ruby', 'cpp', 'python', 'java' ] */

// Similarly ForEach can be use for array of objects
const myCoding = [
  {
    languageName: "javascript",
    languageFileNAme: "js",
  },
  {
    languageName: "java",
    languageFileNAme: "java",
  },
  {
    languageName: "python",
    languageFileNAme: "py",
  },
];

myCoding.forEach( (item)=> {
    console.log(item.languageName);
    
} )

// Output::::::::::::
/*javascript
java
python*/


