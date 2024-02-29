/* З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).*/

const categoryElement = document.querySelectorAll("li.item");
console.log(`Numbers of categories:${categoryElement.length}`);

categoryElement.forEach((el) =>
    console.log(
        `Category:${el.firstElementChild.textContent}\n Elements:${el.lastElementChild.children.length}`
    ));