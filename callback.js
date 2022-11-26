studentobj = {

	'yash': 26,

	'vaibhav': 24,

	'rajesh' : 25,

	}
    console.log(Object.keys(studentobj))
   let arrkey=  Object.keys(studentobj)
let sum =0;
     arrkey.forEach(key => {
       
        sum += studentobj[key] 
      } )
//console.log(sum)


      function findaverageage(studentobj){
        let averageAge;
        averageAge  = studentobj/3
     
 
        
return averageAge;
    
    }

  console.log(findaverageage( sum ))  






    
    
    