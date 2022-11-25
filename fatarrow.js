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
     eligible = (age) => {
        let boardmarks = Math.floor(this.hindi+this.english+this.phy+this.math+this.chem)/5;
  console.log(boardmarks)
      if(boardmarks>40&& this.age>age){
        console.log(this.name , 'is egligible')
      }else{
        console.log(this.name,'is not egligible' )
      }
    }
}

let obj1 = new student('mohan',17,825456,82,40,85,45,65)
let obj2 = new student('mohani',21,8256626,80,42,55,40,69)
let obj3 = new student('suman',19,85492885456,88,49,65,35,95)
let obj4 = new student('sohan',20,8289456,40,80,33,45,50)
let obj5 = new student('rohan',24,82548498986,55,60,36,65,65)
obj1.eligible(19)
obj2.eligible(19)
obj3.eligible(19)
obj4.eligible(19)
obj5.eligible(19)

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)
// console.log(obj5)

console.log(student.count)