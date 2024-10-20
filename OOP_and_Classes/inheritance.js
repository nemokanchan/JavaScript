class USer{
    constructor(username){
        this.username=username;
    }
    printME(){
        console.log("USer is called")
    }
}

class Teacher extends USer{
    constructor(username,email){
        super(username)
        this.email

    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const kanxu = new Teacher("Kanchan","KAnchan@gmail.com")
kanxu.addCourse()
kanxu.printME()

const masala=new USer("Masala Tea")
// masala.addCourse 
masala.printME()

console.log(kanxu instanceof USer);
