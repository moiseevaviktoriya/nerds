window.addEventListener('scroll', scroll, {once: true});
let numbers = document.querySelectorAll('.about-us__col-small > .about-us__title'),
numbersArr = Array.from(numbers);

function scroll() {
  let scrTop = window.scrollY;
    numbersArr.forEach(function (number) {
        if (scrTop > number.offsetTop - window.innerHeight) {
            numAnimate(number);
        } 
    });
}

function numAnimate(number) {
    let num = 1;
    let result = +number.childNodes[0].textContent;
    
    setInterval(function () {
        num++;
        if (num <= result) { 
            number.childNodes[0].textContent = num; 
        }
        
        if (num === result) {
            number.classList.add('red-title');
        }
    }, 50);
};
