let posts = [
    {title:'post one',body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two',body :'this is post two',createdAt:new Date().getTime()}
]
let stop =0;
function getpost(){
   clearInterval(stop)
  stop =  setInterval( ()=>{
     let output= ''
     posts.forEach((post,index)=>{
        output += `<li>${post.title}  Created ${(new Date().getTime()-post.createdAt)/1000} Seconds ago</li>`
     });
     document.body.innerHTML= output
   },1000)
   }

   function creatpost(post1){
      
     setTimeout(()=>{
         posts.push({...post1,createdAt:new Date().getTime()})
     //callback()
      },2000)

   }
   // getpost()
   function create4thPost(post,callback1){
 
    setTimeout(()=>{
   posts.push({...post,createdAt:new Date().getTime()}) 
   callback1()
},3000)

   }


   console.log(posts)
   creatpost({title:'post three',body:'this is post three'},getpost)
   create4thPost({title:'post four',body:'this is post four'},getpost)

