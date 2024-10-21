class USer {
  constructor(username) {
    this.username = username;
  }
  printME() {
    console.log("USer is called");
  }

  static createId(){
    return`123`
  }
}

const kanchan=new USer("Kanchan")
// console.log(kanchan.createId())


class Teacher extends USer {
  constructor(username, email) {
    super(username);
    this.email;
  
}
}

const iphone=new Teacher("iphone","i@Teacher.com")
iphone.printME();
// console.log(iphone.createId());

