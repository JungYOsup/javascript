const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  //event에 click evnet가 들어가고
  const btn = event.target;
  //click.target (그냥 click이라고 했을경우 첫번째 버튼이 클릭된건지 두번째 버튼이 클릭된거지 알수 없으므로 target을 사용하여 내가 click한 버튼이 무엇인지를 파악할수 잇게한다. )

  const li = btn.parentNode; //그 특정 버튼의 부모노드를 가져온다

  toDoList.removeChild(li); //ul테그의 자식요소인 특정 버튼의 li를 제거한다.

  const cleanToDos = toDos.filter(function(toDo) {
    //toDo라는 파라미터에 toDos의 값들이 하나씩 들어가고 조건에 만족하는 값들이 cleantoDos 에 들어가게 된다.
    //cleantoDos는 자동으로 배열 상태로 만들어짐.
    return toDo.id !== parseInt(li.id);
  });

  toDos = cleanToDos; //조건에 의해 필터된 cleantoDos의 함수들을 다시 toDos에 집어넣고

  saveToDos(); //localstorage에 저장한다.
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");

  const delBtn = document.createElement("button");

  const span = document.createElement("span");

  const newId = toDos.length + 1;

  delBtn.innerText = "❌";

  delBtn.addEventListener("click", deleteToDo); //1.delBtn의 click 이벤트가 발생하면 deleteToDo 함수를 실행시키겠다.

  span.innerText = text;

  li.appendChild(delBtn);

  li.appendChild(span);

  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text: text,

    id: newId
  };

  toDos.push(toDoObj);

  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = toDoInput.value;

  paintToDo(currentValue);

  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);

    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();

  toDoForm.addEventListener("submit", handleSubmit);
}

init();
