
function one(){
    const user1="Kanchan"
    function two(){
        const user2="Kabin"
        console.log(user1)
    }
    // console.log(user2); can't access local variable
    two()
}
one()


if(true){
    const username1="Asmita"
    if(username1==="Asmita"){
        const username2="Ajaya"
        console.log(username1 + username2);
    }
    console.log(username1);
}



console.log(addOne(5));
function addOne(num){
    return num+1
}



// console.log(addtwo(5)); Can't access before declaration
const addtwo=function(num){
    return num+2
}
