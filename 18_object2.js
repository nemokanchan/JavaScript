// type 2:Singleton object
const newobj= new Object()
console.log(newobj);

// Non singleton:
const newobj2={}
console.log(newobj2);

newobj.name="NEmo"
newobj.email="No@gmail.com"
newobj.loggedIn=false
console.log(newobj);

const obj1= {
    name:"Kabin",
    address:{
        country:{
            name:"Nepal",
            city:{
                District:"Kathmandu",
                city:"Gaushala"
            }
        }
    }
}

console.log(obj1.address);

const obj2={1:"a",2:"b"};
const obj3={3:"a",4:"b"};

// const obj4=Object.assign({},obj2,obj3)
// console.log(obj4)

//Spread::
const obj4={...obj2,...obj3}
console.log(obj4)

const user=[
    {
        name:"A",
        id:"2"
        

    },
    {
        name:"A",
        id:"2"
    
    },
    {
        name:"A",
        id:"2"
    
    },
    {
        name:"A",
        id:"2"
    
    },
    {
        name:"A",
        id:"2"
    
    }
]

user[1].id
console.log(newobj);
console.log(Object.keys(newobj));
console.log(Object.values(newobj));
console.log(Object.entries(newobj));//Makes individual arrays

console.log(newobj.hasOwnProperty('loggedIn'));

