// В HTML есть разметка формы. Напиши скрипт который будет
//  сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
// в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их
//  значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй
//  библиотеку lodash.throttle.

const FEEDBACK = 'feedback-form-state';
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageText = form.elements.message;

// Зчитуємо дані з локального сховища
const savedData = JSON.parse(localStorage.getItem(FEEDBACK));
if (savedData) {
  emailInput.value = savedData.email;
  messageText.value = savedData.message;
}

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  const { name, value } = e.target;
  localStorage.setItem(
    FEEDBACK,
    JSON.stringify({
      ...JSON.parse(localStorage.getItem(FEEDBACK)),
      [name]: value,
    })
  );
}

function onSubmit(event) {
  event.preventDefault();
  console.log(emailInput.value);
  console.log(messageText.value);
  localStorage.clear();
  form.reset();
}
