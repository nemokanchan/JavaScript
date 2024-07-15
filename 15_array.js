let arr1= [2,4,6,3,7,0,9,5]
console.log(arr1)
console.log(arr1[2])

// Array Methods

arr1.push(8)
console.log(arr1);
arr1.pop(3)
console.log(arr1);

arr1.unshift(6);
console.log(arr1);
arr1.shift(6);
console.log(arr1);
arr1.shift();
console.log(arr1);


//  slice, splice

console.log("A  ",arr1);

let arr2= arr1.slice(0,4)
console.log( "B  ", arr1);
console.log( arr2);


let arr3=arr1.splice(0,4)
console.log("C  ", arr1);
console.log( arr3);


//Output::
        // [2, 4, 6, 3, 7, 0, 9, 5];
        // (6)[(2, 4, 6, 3, 7, 0, 9, 5, 8)][(2, 4, 6, 3, 7, 0, 9, 5)][
        //   (6, 2, 4, 6, 3, 7, 0, 9, 5)
        // ][(2, 4, 6, 3, 7, 0, 9, 5)][(4, 6, 3, 7, 0, 9, 5)];
        // A[(4, 6, 3, 7, 0, 9, 5)];
        // B[(4, 6, 3, 7, 0, 9, 5)][(4, 6, 3, 7)];
        // C[(0, 9, 5)][(4, 6, 3, 7)];