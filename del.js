var form  =document.getElementById('addForm')
var itemList = document.getElementById('items')

form.addEventListener('submit', addItem)
itemList.addEventListener('click',removeItem)
function addItem(e){
    e.preventDefault();
    var newItem =document.getElementById('item').value
    var li =document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem))
/********************************/
var editadd = document.createElement('button');
editadd.className='btn btn-success btn-sm float-right active'
editadd.appendChild(document.createTextNode('edit'))
li.appendChild(editadd)

    /*****************************/
    var deletbtn = document.createElement('button');
    deletbtn.className ='btn btn-danger btn-sm float-right delete'
    deletbtn.appendChild(document.createTextNode('X'))    
   
    li.appendChild(deletbtn)
     itemList.appendChild(li)
  
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are you sure?')){  var li =e.target.parentElement;
        itemList.removeChild(li)
    }
}

}

