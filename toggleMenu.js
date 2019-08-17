'use strict';
let toggleBtn = document.querySelector('.toggle'),
    menu = document.querySelector('.links');
toggleBtn.addEventListener('click', toggle);

function toggle() {
    menu.classList.toggle('active__menu');
    toggleBtn.classList.toggle('active__toggle');
}