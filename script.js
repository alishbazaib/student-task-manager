const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = taskTitle.value.trim();
  const description = taskDescription.value.trim();

  if (title === "" || description === "") {
    alert("Please enter both a task title and description.");
    return;
  }

  const task = document.createElement("div");
  task.className = "task";

  task.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;

  taskList.appendChild(task);

  taskTitle.value = "";
  taskDescription.value = "";
});
