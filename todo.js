const toDoForm = document.querySelector(".js-toDoForm"); //form
const toDoInput = toDoForm.querySelector("input"); //input

const toDoList = document.querySelector(".js-toDoList"); //ul

const TODOS_LS = "toDos";
const Listarray = [];

function paintToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deletebutton = document.createElement("button");
  const newId = Listarray.length + 1;

  deletebutton.innerText = "X";
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(deletebutton);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };

  Listarray.push(toDoObj);
  saveToDos();
}

function HandleSubmit(event) {
  event.preventDefault();
  const text = toDoInput.value;
  paintToDo(text);
  toDoInput.value = "";
}

function askforList() {
  toDoForm.addEventListener("submit", HandleSubmit);
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(Listarray));
}

function loadToDOs() {
  const getToDos_LS = localStorage.getItem(TODOS_LS);

  if (getToDos_LS !== null) {
    const parsedToDOs = JSON.parse(getToDos_LS);

    parsedToDOs.forEach(function(toDO) {
      paintToDo(toDO.text);
    });
  }
}

function init() {
  loadToDOs();
  askforList();
}

init();
