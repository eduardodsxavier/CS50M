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
    const checkbox = document.createElement("input")
    const label = document.createElement('label')

    label.innerHTML = pro
    label.setAttribute("for", checkbox)
    label.classList.add(classNames.TODO_TEXT)

    checkbox.type = "checkbox"
    checkbox.classList.add(classNames.TODO_CHECKBOX)

    todo.appendChild(checkbox)
    todo.appendChild(label)
    todo.classList.add(classNames.TODO_ITEM)

    list.appendChild(todo)

  // add one to itemCountSpan
    itemCountSpan.innerHTML++
    uncheckedCountSpan.innerHTML++
}
