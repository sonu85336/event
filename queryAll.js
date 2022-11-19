// var  item = document.querySelector('.list-group-item');
// item.style.color = 'green'

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';
// var thirditem = document.querySelector('.list-group-item:nth-child(3)')
// thirditem.style.visibility = 'hidden'
// var lastitem  = document.querySelector('.list-group-item:last-child')
// lastitem.style.color = 'red' 

/*****************************/
//queryselectorAll//
var fcolor = document.querySelector('.list-group-item:nth-child(2)')
console.log(fcolor)
fcolor.style.color='green'
var back = document.querySelectorAll('.list-group-item:nth-child(odd)')
for(var i=0;i<back.length;i++){
    back[i].style.backgroundColor = "skyblue"
}
///diffrence
document.write("querySelctor can use only be used to access a single element while querySelector can be used to access all element which match a specified CSS selector.")