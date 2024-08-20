document.getElementById("addTaskBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let taskList = document.getElementById("taskList");
    let newTask = document.createElement("li");
    newTask.innerHTML = `
            ${taskText}
            <button class="doneBtn">Done</button>
        `;
    taskList.appendChild(newTask);
    taskInput.value = "";

    // Hide "No Tasks" message if a task is added
    document.getElementById("noTasksMsg").style.display = "none";

    // Remove task when the done button is clicked
    newTask.querySelector(".doneBtn").addEventListener("click", function (e) {
      e.stopPropagation();
      taskList.removeChild(newTask);
      checkTasks();
    });
  }
}

document.querySelectorAll(".doneBtn").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    button.parentElement.remove();
    checkTasks();
  });
});

function checkTasks() {
  let taskList = document.getElementById("taskList");
  let noTasksMsg = document.getElementById("noTasksMsg");
  if (taskList.children.length === 0) {
    noTasksMsg.style.display = "block";
  } else {
    noTasksMsg.style.display = "none";
  }
}

// Initial check for tasks
checkTasks();
