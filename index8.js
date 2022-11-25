class student{
    static count =0
    constructor(name,age,phone,hindi,english,phy,math,chem){
        this.name = name;
        this.age= age;
        this.phone= phone;
        this.hindi = hindi;
        this.english=english;
        this.phy = phy;
        this.math = math;
        this.chem = chem;
        student.count++ 
    }
    // static countuser(){
    //     console.log('total number of candidates')
    // }
    eligible(){
        let boardmarks = Math.floor(this.hindi+this.english+this.phy+this.math+this.chem)/5;
  console.log(boardmarks)
      if(boardmarks>40){
        console.log(this.name , 'is egligible')
      }else{
        console.log(this.name,'is not egligible' )
      }
    }
}

let obj1 = new student('mohan',17,825456,82,40,85,45,65)
let obj2 = new student('mohani',18,8256626,80,42,55,40,69)
let obj3 = new student('suman',19,85492885456,88,49,65,35,95)
let obj4 = new student('sohan',20,8289456,40,20,33,45,50)
let obj5 = new student('rohan',16,82548498986,55,60,36,65,65)
obj4.eligible()
console.log(student.count)
console.log(obj4)