//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
  //Prefent from submi
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //chech mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  //chech trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  //appned to list
  todoList.appendChild(todoDiv);
  //clear todo input value
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.remove();
  }

  //check mark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
