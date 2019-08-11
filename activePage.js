'use strict';
let links = document.querySelectorAll('.header__nav_link');

if (window.location.hash.indexOf('#partners') > -1) {
    links[3].classList.add('current__link');
} else if (window.location.pathname.indexOf('/shop.html') > -1 && !window.location.hash) {
    links[2].classList.add('current__link');
} else if (window.location.hash.indexOf('#partners') > -1) {
    links[1].classList.add('current__link');
} else {
    links[0].classList.add('current__link');
}

links[1].addEventListener('click', changeActiveLink);
links[3].addEventListener('click', changeActiveLink);

function changeActiveLink(e) {
    links[0].classList.remove('current__link');
    links[1].classList.remove('current__link');
    links[3].classList.remove('current__link');
    e.target.classList.add('current__link');
}