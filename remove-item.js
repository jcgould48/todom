document.querySelector(".remove-todo").addEventListener('click',function(){
    const rmvItem = Number(document.querySelector(".index-input").value)
    
    document.querySelector('.todo-list').removeChild(list.childNodes[0])
    })