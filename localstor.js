const getvalue = document.querySelector('.label')

 const  addvalue=document.querySelector('#t1').value

  console.log(addvalue)
    console.log(getvalue.textContent)
localStorage.setItem(getvalue.textContent,addvalue)

