const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add task to the list
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = "";

    // Mark task as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Remove task from the list
    const deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });
});