console.log('person1 show ticket ')
console.log('person2 show ticket')

const preMovie =async ()=>{
    const person3prom = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(' ticket'),3000)
        })  
        const getPopcorn=new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('popcorn'),4000)
        })  
        const  addButter = new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('butter'),5000)
        })   
        let ticket = await person3prom;
  console.log(`got the ${ticket}`)
  console.log(`husband we should go in now `)
  console.log(`wife i am hungry`)
  let popcorn = await getPopcorn;
  console.log(`husband her is ${popcorn}`)

  let butter = await addButter;
  console.log(`added ${butter}`)
  const getColdDrinks=new Promise((resolve,reject)=>{
     setTimeout(()=>resolve('colddrinks'),6000)
  })
let colddrinks = await getColdDrinks;
console.log(`i also get the ${colddrinks}`)
return ticket
 
}
preMovie().then((t)=>console.log(`you get the ${t}`))
