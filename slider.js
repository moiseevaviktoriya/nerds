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

let indicators = document.querySelector('.slider__indicators');
indicators.addEventListener('click', changeSlide);

function changeSlide(e) {
    
    let indicator = document.querySelectorAll('.indicator'),
        indicatorArr = Array.from(indicator),
        slider = document.querySelector('.slider__img'),
        sliderTitle = document.querySelector('.slider__title'),
        sliderDescription = document.querySelector('.slider__description');
    
    indicatorArr.forEach(function (item, i) {
        if (item === e.target && !item.classList.contains('active__indicator')) {
          item.classList.add('active__indicator');
          slider.src = sliders[i].src;
          sliderTitle.textContent = sliders[i].title;
          sliderDescription.textContent = sliders[i].description;
        } else if (item !== e.target) {
          item.classList.remove('active__indicator');  
        }
    })
}