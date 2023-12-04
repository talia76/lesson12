function addTask() {
    const taskText = document.getElementById("taskInput").value;
    if (taskText.trim() === "") {
        alert("пожалуйста введите текст задачи");
        return;
    }
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
    document.getElementById("taskList").appendChild(taskItem);
    document.getElementById("taskInput").value = "";
}
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove()
}