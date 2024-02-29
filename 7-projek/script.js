const formEl = document.querySelector(".todo-form");
const todoInputEl = formEl.elements["todo-input"];
const todoListEl = document.querySelector(".todo-list");

const todos = [];

// buat elemen untuk todo
function renderTodoElement(newTodo) {
  const todoEl = document.createElement("li");
  todoEl.classList.add("todo");
  const todoTextEl = document.createElement("span");
  todoTextEl.classList.add("todo-text");
  todoTextEl.innerText = newTodo.text;

  const todoButtonEL = document.createElement("button");
  todoButtonEL.classList.add("todo-button");
  todoButtonEL.innerText = "selesaikan tugas";

  todoEl.append(todoTextEl);
  todoEl.append(todoButtonEL);

  todoListEl.append(todoEl);
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoText = todoInputEl.value;

  const newTodo = {
    text: todoText,
    isDone: false,
  };

  todos.push(newTodo);

  renderTodoElement(newTodo);
});
