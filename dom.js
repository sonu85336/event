console.dir(document.domain)
console.log(document.title)
// document.title = 202
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[2])
document.all[2].textContent = 'hello'
console.log(document.forms)
console.log(document.links)
console.log(document.images)
const headertitle= document.getElementById('header-title')
 
console.log(headertitle)
headertitle.textContent= "Hello"
headertitle.innerText ='2342'
console.log(headertitle.textContent)
console.log(headertitle.innerText)
const header = document.getElementById('main-header')
header.style.borderBottom= 'solid 8px black '
const items = document.getElementsByClassName('list-group-item')
console.log(items)
  for(var i =0;i<items.length;i++){
      items[i].style.fontWeight = 'bold'
      items[i].style.color ='green'

  }


