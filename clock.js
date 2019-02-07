const clockContainer = document.querySelector(".js-clock");

const clockTitle = clockContainer.querySelector(".js-title");
// 다음과 같이 .js-clock의 하위 요소인 .js-title을 clockContainer의
// 변수를 사용하여 선택하였다.

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
