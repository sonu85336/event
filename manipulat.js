var item = document.querySelector('#items')
// console.log(item.parentElement)
// console.log(item.lastElementChild)
// item.lastElementChild.style.color = 'green'
// console.log(item.lastChild)

// console.log(item.firstElementChild)
// item.firstElementChild.style.color ='yellow'
// console.log(item.firstChild)

// console.log(item.nextSibling)
// console.log(item.nextElementSibling)
// item.nextElementSibling.className ="hello"
// console.log(item.previousSibling)
// console.log(item.previousElementSibling)

let newl = document.createElement('div');

newl.className ="hello world";
newl.id ='hello';
newl.setAttribute('title',"My new world");

let textnode = document.createTextNode("Hello World");
newl.appendChild(textnode);
console.log(newl);

var container = document.querySelector('header .container');
var my= document.querySelector('header h1');

newl.style.fontSize = '25px'
container.insertBefore(newl,my)
/************ */

let befo = document.createElement('div')
let text = document.createTextNode("Hello World")
befo.appendChild(text)
var con = document.querySelector('.main')
var nev = document.querySelector('ul .adding')

befo.style.fontSize ='25px'
 con.insertBefore(befo,nev)
