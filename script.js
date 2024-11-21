function add() {
    const texttag = document.querySelector(".inputtask");
    const text = texttag.value.trim();

    if (text) {
        const taskList = document.querySelector(".tasklist");
        const taskItem = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = text;

        taskItem.append(taskText);

        // Add event to toggle completed class
        taskItem.addEventListener("dblclick", () => {
            taskItem.classList.toggle("completed");
        });

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit");

        editBtn.addEventListener("click", () => {
            const newText = prompt("Edit your task:", taskText.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskText.textContent = newText.trim();
            }
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        taskItem.append(editBtn);
        taskItem.append(deleteBtn);
        taskList.append(taskItem);

        // Clear input field
        texttag.value = "";
    } else {
        alert("Enter a task");
    }
}
