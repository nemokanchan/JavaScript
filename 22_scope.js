// global and local scope:

var c =32

if(true){
    let a=2
    const b=3
    var c =54

}

// console.log(a);
// console.log(b);          Gives privacy and eroor as it is defined in local scope
console.log(c);//c=54 so var changes or treats all variable as global so we don't use it

