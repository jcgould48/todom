
document.querySelector(".add-todo").addEventListener('click',function(){
let todoItem = document.querySelector(".todo-input")
let newLi =document.createElement('li')
newLi.innerText =todoItem.value
document.querySelector('.todo-list').appendChild(newLi)
clearSearch('.todo-input');
})

