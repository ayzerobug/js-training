const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const searchInput = document.getElementById("searchInput");
const clearCompletely = document.getElementById("clearCompletely");

let tasks = [];

const saveTasks = () => {
  const jsonString = JSON.stringify(tasks);
  localStorage.setItem("tasks", jsonString);
};

function displayTasks() {
  taskList.innerHTML = "";

  const searchText = searchInput.value.toLowerCase();

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchText),
  );

  if (filteredTasks.length === 0) {
    taskList.innerHTML = `<p class="empty">No tasks found.</p>`;
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
            <input type="checkbox" 
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${task.id})">

            <span>${task.text}</span>

            <button class="edit-btn" onclick="editTask(${task.id})">
                Edit
            </button>

            <button class="delete-btn" onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

    taskList.appendChild(li);
  });

  updateTaskCount();
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a task.");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  tasks.push(newTask);

  taskInput.value = "";

  saveTasks();

  displayTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();
  displayTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }

    return task;
  });

  displayTasks();
}

function editTask(id) {
  const task = tasks.find((task) => task.id === id);

  const newText = prompt("Edit your task:", task.text);

  if (newText !== null && newText.trim() !== "") {
    task.text = newText.trim();

    saveTasks();
    displayTasks();
  }
}

function updateTaskCount() {
  const remaining = tasks.filter((task) => !task.completed).length;

  taskCount.textContent = `${remaining} task${remaining !== 1 ? "s" : ""} remaining`;
}

clearCompletely.addEventListener("click", () => {
  tasks = [];

  saveTasks();
  displayTasks();
});

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

searchInput.addEventListener("input", displayTasks);

localStorage.setItem("username", "Ayomide");

// localStorage.removeItem("username");

// localStorage.clear();

const username = localStorage.getItem("username");
console.log(username);

console.log(localStorage.getItem("tasks"));

const loadTask = () => {
  const savedTask = localStorage.getItem("tasks");
  tasks = JSON.parse(savedTask);
};

loadTask();
displayTasks();
