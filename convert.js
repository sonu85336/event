const posts = [
    {title:'post one ',body:'this is post one ',beforeadd:new Date()},
    {title:'post two ',body:'this is post two',beforeadd:new Date()}

    ]

    function getposts(){
        setTimeout(()=>{
let output = ''
posts.forEach((post)=>{
    output += `<li> ${post.title}</li>`
})
document.body.innerHTML = output
        },500);
    }
    const creatpost = async(post)=>{
    
//********************8 */
 
   const convert1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(posts.push(post))
    },1000)
   })
   const deletepost =    new Promise((resolve,reject)=>{
                    setTimeout(()=>{
           resolve( posts.pop())
            
                },3000) 
                })
             
  let  convert = await deletepost;
return convert
  
  }

 creatpost({title:'post three',body:'this is post three'}).then( getposts)

 console.log(posts)
 