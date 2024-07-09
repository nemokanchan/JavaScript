// Stack (Primitive) , Heap(Non-Primitive)
let youtubename="Asmita"

let anothername=youtubename
anothername="Kanchan"

console.log(youtubename);
console.log(anothername);

let user={
    eamil: "user@gmail.com",
    address:"Kathmandu"
}

let user2=user

user2.eamil="Kanchan@gmail.com"

console.log(user.eamil);
console.log(user2.eamil);