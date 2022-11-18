import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};

const formData = {};

refs.form.addEventListener('input', throttle(onFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);


// const submitForm = elem => {
//      elem.preventDefault();
//     if (keyValues.email === '' || keyValues.message === '') {
//         return alert('заповніть усі поля!!');
//     }
// }

function onFormData(elem) {
    formData[elem.target.name] = elem.target.value;
     localStorage.setItem("feedback-form-state",  JSON.stringify(formData));
};


function onFormSubmit(e) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    e.preventDefault();
    e.currentTarget.reset();
   
};

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};

dataFromLocalStorage();