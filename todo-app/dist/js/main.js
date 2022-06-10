const addInput = document.querySelector('#add-input'),
    addBtn = document.querySelector('#add-btn'),
    toDoList = document.querySelector('.todo-list')

const toDos = JSON.parse(localStorage.getItem('toDos'))

const startingPage = (arr) => {
    arr.forEach((element, i) => {
        toDoList.innerHTML += `
        <li class="todo">
            <span class="todo-text">${element.toDo}</span>
            <i onClick="checkToDo(${i})" class="todo-btn icon-checkmark" id="check"></i>
            <i onClick="editToDo(${i})" class="todo-btn icon-pencil2" id="edit"></i>
            <i onClick="deleteToDo(${i})" class="todo-btn icon-cancel" id="delete"></i>
        </li>`
        if (element.check === true) {
            const toDo = document.querySelectorAll('.todo')[i]
            const toDoText = document.querySelectorAll('.todo-text')[i]
            toDo.style.backgroundColor = 'rgba(225, 229, 242, 0.3)'
            toDoText.style.textDecoration = 'line-through'
        }

    })
}

if (!toDos) {
    const toDos = []
    localStorage.setItem('toDos', JSON.stringify(toDos))
}
else {
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    startingPage(toDos)
}

const checkToDo = (i) => {
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    const toDo = document.querySelectorAll('.todo')
    const toDoText = document.querySelectorAll('.todo-text')
    if (toDos[i].check === false) {
        toDo[i].style.backgroundColor = 'rgba(225, 229, 242, 0.3)'
        toDoText[i].style.textDecoration = 'line-through'
        toDos[i].check = true
    }
    else if (toDos[i].check === true) {
        toDo[i].style.backgroundColor = '#E1E5F2'
        toDoText[i].style.textDecoration = 'none'
        toDos[i].check = false
    }

    localStorage.setItem('toDos', JSON.stringify(toDos))
}

const editToDo = (i) => {
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    const toDo = document.querySelectorAll('.todo')
    const toDoText = document.querySelectorAll('.todo-text')
    const editInput = document.createElement('input')
    editInput.classList.add('edit-input')
    editInput.value= toDoText[i].textContent
    toDo[i].replaceChild( editInput, toDoText[i])
    editInput.focus()
    editInput.onblur = () => {
        toDoText[i].textContent = editInput.value
        toDos[i].toDo = editInput.value
        localStorage.setItem('toDos', JSON.stringify(toDos))
        toDo[i].replaceChild( toDoText[i], editInput)
    }
    editInput.onkeydown = (e) => {
        if (e.keyCode === 13) {
            toDoText[i].textContent = editInput.value
            toDos[i].toDo = editInput.value
            localStorage.setItem('toDos', JSON.stringify(toDos))
            toDo[i].replaceChild( toDoText[i], editInput)
        }
    }
}

const deleteToDo = (i) => {
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    toDos.splice(i, 1)
    localStorage.setItem('toDos', JSON.stringify(toDos))
    toDoList.innerHTML = ''
    startingPage(toDos)
}

const addTodo = () => {
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    const toDo = addInput.value;
    if (toDo === '') {
        alert('Please enter a todo')
    }
    else{
        toDos.push({
            toDo: toDo,
            check: false
        })
        localStorage.setItem('toDos', JSON.stringify(toDos))
        addInput.value = ''
        toDoList.innerHTML = ''
        startingPage(toDos)
    }
    
}

addBtn.addEventListener('click', addTodo)