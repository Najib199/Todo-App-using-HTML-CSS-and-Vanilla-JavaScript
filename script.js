// Select necessary elements
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

// Function to render todos
function renderTodos() {
  // Clear current list
  todoList.innerHTML = "";

  // Loop through todos and create list items
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
            ${todo}
            <button class="btn btn-sm btn-danger" onclick="deleteTodo(${index})">Delete</button>
        `;
    todoList.appendChild(li);
  });
}

// Function to delete todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Function to add new todo
addBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    todos.push(todoText);
    todoInput.value = "";
    renderTodos();
  }
});
