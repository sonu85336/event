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
  const childhtml = `<li>${user.user}  ${user.email}`
      parentNode.innerHTML= parentNode.innerHTML+childhtml;
}