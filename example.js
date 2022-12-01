function  buycar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('buy car')
        },5000)
        
    })
}
function   plantrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('let go yo manali')
        },2000)
        
    })
}
function   reachmanali(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('reached manali')
        },1000)
        
    })
}
function  gotofamousmountain(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('reached mauntain')
        },1000)
        
    })
}


////promise
buycar().then(msg1=>{
    console.log(msg1);
    plantrip().then(msg2=>{
        console.log(msg2);
        reachmanali().then(msg3=>{
            console.log(msg3);
            gotofamousmountain().then(msg4=>{
                console.log(msg4);
                    
            })
        })
    })
})
/// await

async function fun1(){
    
    try{
        const msg1 = await buycar()
    console.log(msg1)
    const msg2 = await plantrip()
    console.log(msg2)
    const msg3 = await reachmanali()
    console.log(msg3)
    const msg4 = await gotofamousmountain()
    console.log(msg4)
   } 
   catch(err){
    console.log(err)
}

}
fun1()
