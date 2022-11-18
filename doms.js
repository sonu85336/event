let item = document.getElementsByClassName('list-group-item')
console.log(item)

for(var i =0;i<item.length;i++){
    item[2].style.backgroundColor = "green"
    item[i].style.fontWeight= 'bold'
  item[i].style.color = 'red'
  item[i].style.fontstyle= 'Comic Sans MS'
}