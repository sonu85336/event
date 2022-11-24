let obj = {num:2}

function  addto(a,b,c){
   return    this.num+a+b+c;

}

//using call
 console.log(addto.call(obj,5,8,3))
 //usig apply
let arr = [5,8,3]
console.log(addto.apply(obj,arr))
//using bind
let bound = addto.bind(obj)
console.log(bound(5,8,3))

//new obj 
let student = {age:20}
  function studentage()
  {
   return this.age;
  }
   bound1 = studentage.bind(student)
  
   console.log(studentage.bind(student)())
    console.log(bound1())
    /********************** */
    //currying 
    function multiply(a,b){
     console.log(a*b)
    }
    let multi = multiply.bind(this,2)
    multi(3)
// using closure
    function add(a){
      return  function add1(b){
        console.log(a+b)
      }
    }

    let adding = add(20)
    adding(30)