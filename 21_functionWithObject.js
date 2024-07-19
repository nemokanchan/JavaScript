function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,200,432))

const user ={
    username:"Nemo",
    Age:12
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and age is ${anyObj.Age}`);
}

// handleObj(user)

handleObj({
  username: "Nemo",
  Age: 12,
});

const arrayList=[100,232,431,532,236]

function returnSecondValue(arrayList){
    return arrayList[1]
}

console.log(returnSecondValue(arrayList));