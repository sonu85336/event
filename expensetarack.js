
function savetolocal(event){
    event.preventDefault()
    const name = event.target.nameid.value;
    const text= event.target.textid.value
    const option = event.target.optionid.value
    const myobj = {
        name,
        text,
        option,
    }

    let joson = JSON.stringify(myobj)
    localStorage.setItem(myobj.name,joson)

    shownewuseronscreen(myobj)
}

  
function  shownewuseronscreen(screen){
    document.getElementById('number').value = '',
    document.getElementById('text').value = ''
    document.getElementById('option').vlaue='';
    
    
    const prentNode = document.getElementById('ul')
    const childnode = `<li id='${screen.name}'> ${screen.name} ${screen.text} ${screen.option}
     <button onclick = deleteuser('${screen.name}')> Delete</button> 
   
     <button onclick = editUser('${screen.name}','${screen.text}','${screen.option}')>Edit</button>
  </li>`
    prentNode.innerHTML = prentNode.innerHTML+childnode;
}
//edit user 
function editUser(nameid,textid,optionid){
    document.getElementById('number').value=nameid;
    document.getElementById('text').value= textid;
    document.getElementById('option').vlaue = optionid;
    deleteuser(nameid)
}

//delete user 
 function deleteuser(nameid){
    localStorage.removeItem(nameid);

    removeuserscreen(nameid)
   
 }
 function   removeuserscreen(nameid){
const prentNode = document.getElementById('ul')
const childnode = document.getElementById(nameid)
prentNode.removeChild(childnode)

if(childnode){
    prentNode.removeChild(childnode)
}
 }

