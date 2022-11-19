import throttle from 'lodash.throttle';

const MEGA_KEY = "feedback-form-state";
const formData = {};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);



function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(MEGA_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(MEGA_KEY)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(MEGA_KEY);
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(MEGA_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();
