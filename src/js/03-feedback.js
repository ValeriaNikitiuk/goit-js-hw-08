import throttle from 'lodash.throttle';



const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInput, 500));

const MEGA_KEY = 'formData';
const formData = {};

getFromLocalStorage();
 
function onSubmitForm(e) {
   e.preventDefault();
  consoleFormData(e.currentTarget);

  if (localStorage = ""){
    localStorage.removeItem(MEGA_KEY);
  }
    e.currentTarget.reset();
}


function onInput (e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}


function getFromLocalStorage() {
  const storageItem = JSON.parse(localStorage.getItem(MEGA_KEY));
  if (!storageItem) return;
 Object.keys(storageItem).forEach(key => {
 formData[key] = storageItem[key];

  const element = form.querySelector(`[name="${key}"]`);
   element.value = storageItem[key];
 
});
 
}



function consoleFormData(form) {
  const feedbackData = Object.fromEntries(new FormData(form));
  console.log( 'feedbackData', feedbackData);
}