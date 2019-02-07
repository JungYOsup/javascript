const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const gretting = document.querySelector(".js-greetings");

const CURRENT_USER = "currentUser";
const SHOWING_CN = "showing";

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", HandleSubmit);
}

function HandleSubmit(event) {
  event.preventDefault();
  const value = input.value;
  getValue(value);
  saveName(value);
}

function getValue(value) {
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  gretting.innerText = `Hello ${value}`;
}

function saveName(value) {
  localStorage.setItem(CURRENT_USER, value);
}

function loadName() {
  const key = localStorage.getItem(CURRENT_USER);

  if (key == null) {
    askForName();
  } else {
    getValue(key);
  }
}

function init() {
  loadName();
}

init();
