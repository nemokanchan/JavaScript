// let myName="Kanchan    "

// console.log(myName.trim().length)
// But we want to get truelength with function

let myHeros =["thor", "spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

object.prototype.kanchan=function(){
    console.log(`Kanchan is present in all object`);
    
}

Array.prototype.Kabin=function(){
    console.log("Kabin says Hello");
    
}

heroPower.kanchan()
myHeros.kanchan()

// heroPower.Kabin()




// Inheritance

const user={
    name: "username",
    present:true
}

const teacher={
    makeVideos:true
}

const teachingAssistant={
    isAvaiable: true

}

 const Material={
    isAvaiable:true,
    __proto__:teachingAssistant
 }

 teacher.__proto__=user




//   Modern Technique

object.setPrototypeOf(teachingAssistant, teacher)


anotherUsername = "BAcchuKAnchu   "
String.prototype.trueLength = function(){
    console.log(`$(this)`);
    
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Okay".trueLength()


