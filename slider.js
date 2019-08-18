let sliders = [{
        'id': 1,
        'title': 'Долго, дорого,  скрупулезно',
        'description': 'Математически выверенный дизайн  для вашего сайта или мобильного приложения',
        'src': './slider/nerds-index-slide1.png'
    },
    {
        'id': 2,
        'title': 'Любим математику как никто другой',
        'description': 'Никакого креатива, только математические формулы для расчета идеальных пропорций.',
        'src': './slider/nerds-index-slide2.png'
    },
    {
        'id': 3,
        'title': 'Только ночь, только хардкор',
        'description': 'Работать днем, как все? Мы против этого. Ближе к полуночи работа только начинается.',
        'src': './slider/nerds-index-slide3.png'
    }];

let indicatorsList = document.querySelector('.slider__indicators');
let slider = document.querySelector('.slider__img'),
        sliderTitle = document.querySelector('.slider__title'),
        sliderDescription = document.querySelector('.slider__description');

if (sliders.length !== 0) {
        setSliderContent(0);
    for (let i = 0; i < sliders.length; i++) {
        let indicator = document.createElement('li');
        i === 0? indicator.classList.add('indicator', 'active__indicator') : indicator.classList.add('indicator');
        indicatorsList.append(indicator);
    }
} else {
    document.querySelector('.slider').style.display = 'none';
}

let indicators = document.getElementsByClassName('slider__indicators')[0];

indicators.addEventListener('click', changeSlide);

let indicator = document.getElementsByClassName('indicator'),
        indicatorArr = Array.from(indicator);

function changeSlide(e) {
    indicatorArr.forEach(function (item, i) {
        if (item === e.target && !item.classList.contains('active__indicator')) {
          item.classList.add('active__indicator');
          setSliderContent(i);
        } else if (item !== e.target && e.target !== indicators) {
          item.classList.remove('active__indicator');  
        }
    })
}

function setSliderContent(pos) {
    slider.src = sliders[pos].src;
    sliderTitle.textContent = sliders[pos].title;
    sliderDescription.textContent = sliders[pos].description;
}

let initialPoint,
    finalPoint,
    sliderToSwipe = document.querySelector('.slider__col:nth-child(2)'),
    currentSlide = document.getElementsByClassName('active__indicator')[0];

sliderToSwipe.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
}, false);

sliderToSwipe.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    finalPoint = event.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    
    if (xAbs > 20) {
        if (finalPoint.pageX > initialPoint.pageX) {
            if (currentSlide.previousSibling) {
                changeSlideBySwipe(-1, currentSlide.previousSibling);
            }
        } else {
            if (currentSlide.nextSibling) {
                changeSlideBySwipe(1, currentSlide.nextSibling);
            }
        }
    }
}, false);

function changeSlideBySwipe(num, sibling) {
    currentSlide.classList.remove('active__indicator');
    sibling.classList.add('active__indicator');
    let currentIndex = indicatorArr.indexOf(currentSlide);
    currentSlide = sibling;
    setSliderContent(currentIndex + num);
}
