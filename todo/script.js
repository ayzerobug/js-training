const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const error = document.querySelector("#error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = taskInput.value.trim();

  if (value === "") {
    error.textContent = "Please enter a task.";
    return;
  }

  error.textContent = "";

  addTask(value);

  taskInput.value = "";

  taskInput.focus();
});

const addTask = (text) => {
  const li = document.createElement("li");
  li.classList.add("task-item");

  li.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="task-actions">
      <button class="complete-btn">Done</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
};
