import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailForm = document.querySelector('.feedback-form input');
const textareaForm = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInput, 500));


onReload()

function onSubmitForm(e) {
   console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
   e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}


function onInput() {
 const formData = {};
  formData.email = emailForm .value;
  formData.message = textareaForm.value
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function onReload() {
  let storageItem = localStorage.getItem('feedback-form-state');
  if (storageItem) {
    let parseData = JSON.parse(storageItem);
    emailForm.value = parseData.email;
    textareaForm.value = parseData.message;
      
  }
}


