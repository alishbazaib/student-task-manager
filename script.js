const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = taskTitle.value.trim();
  const description = taskDescription.value.trim();
  const priority = taskPriority.value;

  if (title === "" || description === "") {
    alert("Please enter both a task title and description.");
    return;
  }

  const task = document.createElement("div");
  task.className = "task";

  task.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <span class="priority ${priority.toLowerCase()}">${priority}</span>
        <span class="status pending">Pending</span>
        <button class="status-btn">Mark Completed</button>
    `;

  taskList.appendChild(task);

  taskTitle.value = "";
  taskDescription.value = "";
  taskPriority.value = "Medium";

  addStatusButton(task);
});

function addStatusButton(task) {
  const button = task.querySelector(".status-btn");
  const status = task.querySelector(".status");

  button.addEventListener("click", function () {
    if (status.classList.contains("pending")) {
      status.textContent = "Completed";
      status.classList.remove("pending");
      status.classList.add("completed");
      button.textContent = "Mark Pending";
    } else {
      status.textContent = "Pending";
      status.classList.remove("completed");
      status.classList.add("pending");
      button.textContent = "Mark Completed";
    }
  });
}

document.querySelectorAll(".task").forEach(function (task) {
  addStatusButton(task);
});
