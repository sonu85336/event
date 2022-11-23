let form =document.getElementById('addform')
let listadd = document.getElementById('listadd')
form.addEventListener('submit',addItem)

function addItem(e){
  e.preventDefault()
  var newItem =document.getElementById('item').value
  var newItem1=document.getElementById('item1').value
let li = document.createElement('li')
li.className='list'
li.appendChild(document.createTextNode(newItem))
li.appendChild(document.createTextNode(newItem1))
// add delet button
var deletbtn = document.createElement('button')
deletbtn.className ='btn btn-danger btn-sm float-right delete'
deletbtn.appendChild(document.createTextNode('X'))
li.appendChild(deletbtn)

var addedit =document.createElement('button') 
addedit.className ='btn btn-success btn-sm float-right active'
addedit.appendChild(document.createTextNode('EDIT'))
li.appendChild(addedit)
//listadd.appendChild(li)
}
let arr=[]
function savetolocal(event){
event.preventDefault()
const user = event.target.username.value
const email = event.target.email.value
let mylocal={
  user,
  email,
}
let locla= JSON.stringify(mylocal)
arr.push(locla)
document.querySelector('form').reset()
localStorage.setItem(mylocal.email,locla)

showNewUserOnScreen(mylocal)
}
function showNewUserOnScreen(user){
  const parentNode = document.getElementById('listadd')
  const childhtml = `<li id=${user.email}>${user.user}  ${user.email}     
  <button onclick = deletUser('${user.email}')>DELETE</button>
  <button onclick=editUser('${user.user}','${user.email}')>EDIT</button>
  
  </li>` 
      parentNode.innerHTML= parentNode.innerHTML+childhtml;
}
//edit user 
function editUser(name,emailId){ 
  document.getElementById('username').value=name;
  document.getElementById('email').value=emailId;
 
  deletUser(emailId)
}
//delete user
function deletUser(emailId){
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);
}
function removeUserFromScreen(emailId){
  const parentNode =document.getElementById('listadd')
  const childnodedelet=document.getElementById(emailId)
  parentNode.removeChild(childnodedelet)
}
/*************************/
