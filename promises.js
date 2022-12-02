const posts = [
    { title: 'post one ', body: 'this is post one ' },
    { title: 'post two ', body: 'this is post two' }

]
function getposts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li> ${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000);
}

///************************ */
function creatpost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           posts.push(post)
            const error = false
            if (!error) {
                resolve(posts);
            } else {
                reject('Error:Somthing wrong')
            }
        }, 1000)
    })
}

//************** */

    function deletepost(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
    posts.pop()
    const error = false;
    if(!error){
        resolve()
    }else{
        reject("Array is empty  now")
    }
        },2000) 
        })

    }
    ///////////delet1
  function deletepost1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop()
            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Array is empty now')
            }
        },4000)
    })
  }
  ///delet 2
  function deletepost3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop()

            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Array is now empty')
            }
        },6000)
    })
  }
  ////////////del4
  function deletepost4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let strong =  posts.pop()
           console.log(strong)
            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Array is now empty')
            }
        },7000)
    })
  }
  //////crearpost4
  function creatpost4(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
         
            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Somethin Wrong')
            }
        },9000)
    }) 
  }
  //delete5
function deletepost5(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop()
            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Array is now empty')
            }
        },11000)
    })
}

// //********************/
 
deletepost()
.then(getposts)
.catch(rr=>console.log(rr));
console.log(posts)
deletepost1()
.then(getposts)
.catch(del2=>console.log(del2));
deletepost3()
.then(getposts)
.catch(del3=>console.log(del3));
deletepost4()
.then(getposts)
.catch(del4=>console.log(del4));
creatpost4({title:'post four',body:'this is post four'})
.then(getposts)
.catch(creat4=>console.log(creat4));
deletepost5()
.then(getposts)
.catch(del4=>console.log(del4))

//    ///// updateLastUserActivityTime
creatpost({ title: 'post three', body: 'this is post three' })
    .then(getposts)
    .catch(err => console.log(err));
 

let user ={
    lastactivityTime: new Date()
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastactivityTime = new Date()

            resolve(user. lastactivityTime)



        }, 1000)
    })
}


Promise.all([creatpost({ title: 'post four', body: 'this is post four' }), updateLastUserActivityTime()]).then((updater) => {
    console.log(updater)
})
    .catch(err => console.log(err))
    
    
    
    
    console.log()








