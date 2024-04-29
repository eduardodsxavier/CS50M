const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // add a new todo in the todo-list
    const pro = prompt("todo name")
 
    if (!pro) {
        return
    }

    const todo = document.createElement("li")
    const checkBox = document.createElement("input")
    const label = document.createElement('label')

    label.innerHTML = pro
    label.classList.add(classNames.TODO_TEXT)
    label.setAttribute("for", checkBox)

    checkBox.type = "checkbox"
    checkBox.classList.add(classNames.TODO_CHECKBOX)
    checkBox.setAttribute("onclick", "updateUncheckedCount(this)")

    todo.id = itemCountSpan
    todo.appendChild(checkBox)
    todo.appendChild(label)
    todo.classList.add(classNames.TODO_ITEM)

    list.appendChild(todo)

  // add one to itemCountSpan
    itemCountSpan.innerHTML++
    uncheckedCountSpan.innerHTML++
}

function updateUncheckedCount(checkBox) {
    if (checkBox.checked){
        uncheckedCountSpan.innerHTML--
    }
    else {
        uncheckedCountSpan.innerHTML++
    }
}
