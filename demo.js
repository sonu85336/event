var form  =document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

form.addEventListener('submit', addItem)
itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItems)
function addItem(e){
    e.preventDefault();
    var newItem =document.getElementById('item').value
    var li =document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem))
/********************************/
//add discription
var adddis =document.getElementById('textadd').value
li.appendChild(document.createTextNode("  "+adddis))
/**************************/
var editadd = document.createElement('button');
editadd.className='btn btn-info btn-sm float-right active'
editadd.appendChild(document.createTextNode('EDIT'))

    /*****************************/
    var deletbtn = document.createElement('button');
    deletbtn.className ='btn btn-danger btn-sm float-right delete'
    deletbtn.appendChild(document.createTextNode('X'))    
   
    li.appendChild(deletbtn)
    li.appendChild(editadd)

     itemList.appendChild(li)
  
}
/*****************************/
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are you sure?')){  var li =e.target.parentElement;
        itemList.removeChild(li)
    }
}

}
/***************************/
//filter
function filterItems(e){
    var text= e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li')
   // const itemsdic =itemList.childNode.getElementsByTagName('li')

Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var des = item.childNodes[1].textContent;

    if(itemName.toLowerCase().indexOf(text)!=-1||des.toLowerCase().indexOf(text)!=-1){
        item.style.display = 'block'
    }else{
        item.style.display ='none'
    }


    
})

}
console.log(itemList.firstChild.textContent)
/*********************************************/
//creat input element
const nextinput = document.createElement('input')
nextinput.className="form-control mr-2"
nextinput.id='textadd'
nextinput.setAttribute('type','text')

//add next inputbox

const contain= document.querySelector('form .newclass')
const has = document.querySelector('.newadd')
contain.insertBefore(nextinput,has)
/**********************************************/







