const API_KEY = "a486795e0bd05dd91bda02235a161809";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY} `
  );
}

const toDoForm = document.querySelector(".js-toDoForm"); //form
const toDoInput = toDoForm.querySelector("input"); //input

const toDoList = document.querySelector(".js-toDoList"); //ul

const TODOS_LS = "toDos";
let Listarray = [];

function paintToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deletebutton = document.createElement("button");
  const newId = Listarray.length + 1;

  deletebutton.innerText = "X";
  deletebutton.addEventListener("click", DeleteToDO);

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

function DeleteToDO(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);
  const cleanToDos = Listarray.filter(function(toDO) {
    return toDO.id !== parseInt(li.id);
  });

  Listarray = cleanToDos;
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
