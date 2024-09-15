

// for (let i = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i =0; i<10; i++){
    const element=i;
    console.log(i);
    
}
// Output: 0    1    2    3....9


for (let i = 0; i <=3; i++) {
    console.log(`OUTER LOOP value: ${i}`);
    

    for (let j = 0; j <= 3; j++) {
        console.log(`inner loop value ${j} in inner loop ${i}`);
    }    
}

// Ouput:::::::::::::::::::::::::::::::::::
// OUTER LOOP value: 0
// inner loop value 0 in inner loop 0
// inner loop value 1 in inner loop 0
// inner loop value 2 in inner loop 0
// inner loop value 3 in inner loop 0
// OUTER LOOP value: 1
// inner loop value 0 in inner loop 1
// inner loop value 1 in inner loop 1
// inner loop value 2 in inner loop 1
// inner loop value 3 in inner loop 1
// OUTER LOOP value: 2
// inner loop value 0 in inner loop 2
// inner loop value 1 in inner loop 2
// inner loop value 2 in inner loop 2
// inner loop value 3 in inner loop 2
// OUTER LOOP value: 3
// inner loop value 0 in inner loop 3
// inner loop value 1 in inner loop 3
// inner loop value 2 in inner loop 3
// inner loop value 3 in inner loop 3


let myarray = ["Rajesh Hamal", "Aryan Sigdel" , "Swastima"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
    
}

//Output:::::::::::::::::
// Rajesh Hamal
// Aryan Sigdel
// Swastima

for (let a = 0; a < 20; a++) {
    if(a==5) {
        console.log(`5 Detected`);
        break;
        
    }
    
    console.log(a);
    
    
}

//Output::::::::::::::
// 0
// 1
// 2
// 3
// 4
// 5 Detected