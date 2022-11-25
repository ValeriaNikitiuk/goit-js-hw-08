import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailForm = document.querySelector('.feedback-form input');
const textareaForm = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInput, 500));
document.addEventListener('DOMContentLoaded', onReload)

const MEGA_KEY = 'formData';
const formData = {};



function onInput (e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}

function onReload() {
  let storageItem = localStorage.getItem(MEGA_KEY);
  if (storageItem) {
    let StorageData = JSON.parse(storageItem);
    emailForm.value = StorageData.email;
    textareaForm.value = StorageData.message;
  }
}

function consoleFormData(form) {
  const feedbackData = Object.fromEntries(new FormData(form));
  console.log( 'feedbackData', feedbackData);
}

function onSubmitForm(e) {
   e.preventDefault();
  consoleFormData(e.currentTarget);
  e.currentTarget.reset();
  localStorage.removeItem(MEGA_KEY);
}