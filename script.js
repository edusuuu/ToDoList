const ALL = document.getElementById("ALL");
const ACTIVE = document.getElementById("ACTIVE");
const DONE = document.getElementById("DONE");
const form = document.getElementById("form");
const inputbox = document.getElementById("input-box");

const ALL_VIEW = document.getElementById("ALL-VIEW");
const ACTIVE_VIEW = document.getElementById("ACTIVE-VIEW");
const DONE_VIEW = document.getElementById("DONE-VIEW");

const showAllView = () => ALL_VIEW.setAttribute("data-all", "visible");
const showActiveView = () => ACTIVE_VIEW.setAttribute("data-active", "visible");
const showDoneView = () => DONE_VIEW.setAttribute("data-done", "visible");

const hideAllView = () => ALL_VIEW.setAttribute("data-all", "hidden");
const hideActiveView = () => ACTIVE_VIEW.setAttribute("data-active", "hidden");
const hideDoneView = () => DONE_VIEW.setAttribute("data-done", "hidden");

let todoID = 0;
const addTodo = (task) => {
    const todo = document.createElement("h2");
    todo.textContent = task;
    todo.setAttribute("id", todoID);
    ALL_VIEW.appendChild(todo);
    todoID += 1;
}

const clearInputValue = () => {
    inputbox.value = "";
}

ALL.onclick = () => {
    showAllView();
    hideActiveView();
    hideDoneView();
    console.log("ALL CLICKED")
}

ACTIVE.onclick = () => {
    showActiveView();
    hideAllView();
    hideDoneView();
    console.log("ACTIVE CLICKED")
}

DONE.onclick = () => {
    showDoneView();
    hideActiveView();
    hideAllView();
    console.log("DONE CLICKED")
}

form.onsubmit = (event) => {
    event.preventDefault();
    const task = inputbox.value;
    addTodo(task);
    clearInputValue();
    console.log(task);
}
