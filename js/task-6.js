/*Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector(".js-btn-crt"),
  btnDestroy: document.querySelector(".js-btn-dest"),
  divContainer: document.querySelector("#boxes"),
}
refs.btnCreate.addEventListener("click", onCreateClick);
refs.btnDestroy.addEventListener("click", onDestroyClick);

function onCreateClick() {
  const amount = refs.input.value;
  destroyBoxes();
  if (amount < 1 || amount > 100) {
    return alert("Enter a number from 1 to 100");
  }

  createBoxes(amount);
  refs.input.value = "";
}

function createBoxes(amount) {
  const divArr = [];

  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement("div");

    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);
  }

  refs.divContainer.append(...divArr);
}

function onDestroyClick() {
  destroyBoxes();
}

function destroyBoxes() {
  refs.divContainer.innerHTML = "";
}