const input = document.getElementById("taskInput");

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
 
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => {
        li.remove()
    };

    li.appendChild(removeBtn);
    const list = document.getElementById("taskList");
    list.appendChild(li);

    input.value = "";
}