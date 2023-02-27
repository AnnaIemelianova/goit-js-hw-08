import throttle from "lodash.throttle";

const throttle = require("lodash.throttle");

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[type="email"]');
const textEl = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';


//Відстежуй на формі подію input, і щоразу записуй у локальне сховище 
//об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
//Нехай ключем для сховища буде рядок "feedback-form-state"

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);
const formData = {};

function onFormInput(event) {

   formData[event.target.name] = event.target.value;
    console.log(formData);

   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}



//Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
//заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

function populateFormData() {
    const getData = localStorage.getItem(STORAGE_KEY);
    const saveData = JSON.parse(getData);
        if(saveData) {
            inputEl.value = saveData.email;
            textEl.value = saveData.message;
        }
}
populateFormData();


//Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль 
//об'єкт з полями email, message та їхніми поточними значеннями.
function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.forEach((email, message) => {
       console.log(`${email}, ${message}`);
    })
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}







