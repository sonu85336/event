console.log('person1:showticket')
console.log('person2:bringticket')
const promisewifebringtick = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})
const getPopcorn= promisewifebringtick.then((t)=>{
    console.log('wife:i have the tick')
    console.log('husband:we should go')
    console.log('wife:i am hungry')
    return new  Promise((resolve,reject)=>  resolve(`${t} popcorn `))
      
    })
    const getbutter = getPopcorn.then((t)=>{
        console.log('husband:i got popcorn')
        return new Promise((resolve,reject)=>resolve(`${t} butter`))
    })
    const  getColdDrinks= new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('colddrinks'),2000)
    })
    
    const colddrinks = getColdDrinks.then((t)=>{
        console.log('he got the colddrinks')
        return new Promise((resolve,reject)=>{
            resolve(` ${t} get colddrinks`)
        })
    })
getbutter.then((t)=>console.log(t))
colddrinks.then((t)=>console.log(t))