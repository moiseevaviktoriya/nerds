'use strict';

let showFormBtn = document.querySelector('.address__col__button'),
    form = document.querySelector('.form__container'),
    closeFormBtn = document.querySelector('.form__close-icon'),
    sendFormBtn = document.querySelector('.form__col-button'),
    formFields = document.querySelectorAll('.form-control');

showFormBtn.addEventListener('click', toggleForm);
closeFormBtn.addEventListener('click', toggleForm);
sendFormBtn.addEventListener('click', sendForm);

function toggleForm(event) {
    event.preventDefault();
    form.classList.toggle('active-form');
}

function sendForm(event) {
    event.preventDefault();
    
    if (formFields[0].value && formFields[1].value && formFields[2].value && formFields[1].validity.valid) {
        form.classList.remove('active-form');
    }
}