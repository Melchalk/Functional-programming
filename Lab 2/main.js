import { addTask, deleteTask, getTasks, setDoneState, updateSortFlag } from './tasks.js';

function addNewTask() {
    const input = document.getElementById("newTask");
    const text = input.value.trim();

    if (!text) return;

    addTask(text);
    input.value = "";

    renderTasksList();
}

function updateSort() {
    updateSortFlag();

    renderTasksList();
}

function renderTasksList() {
    const list = document.getElementById("tasks");
    list.innerHTML = "";

    const tasks = getTasks();
    tasks.forEach(task => {
        const newTask = document.createElement("div");
        newTask.className = "task";
        newTask.textContent = task.name;

        const state = document.createElement("span");
        state.textContent = task.state == 1 ? "Выполнено" : "Не выполнено";

        const buttons = document.createElement("div");

        const doneButton = document.createElement("button");
        doneButton.textContent = "Выполнить";
        doneButton.className ="done-button";

        doneButton.addEventListener("click", () => {
            setDoneState(task.id);
            renderTasksList();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.className ="delete-button";

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
            renderTasksList();
        });

        buttons.appendChild(doneButton);
        buttons.appendChild(deleteButton);

        newTask.appendChild(state);
        newTask.appendChild(buttons);

        list.appendChild(newTask);
    });
}

document.getElementById("createButton").addEventListener("click", addNewTask);
document.getElementById("sortButton").addEventListener("click", updateSort);

