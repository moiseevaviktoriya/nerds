let serviceRow = document.querySelector('.services__row');

if (getComputedStyle(serviceRow).overflow === 'hidden') {
    let indicatorsList = document.querySelector('.services__indicators'),
        activeService = document.querySelector('.services__col'), 
        servicesCols = document.querySelectorAll('.services__col');
    
       for (let i = 0; i < servicesCols.length; i++) {
            let indicator = document.createElement('li');
            i === 0? indicator.classList.add('services__indicator', 'active__indicator') : indicator.classList.add('services__indicator');
            indicatorsList.append(indicator);
        }
    
    let indicators = document.getElementsByClassName('services__indicators')[0],
        currentCol = document.getElementsByClassName('active__indicator')[1];

    indicators.addEventListener('click', changeSlide);

    let indicator = document.getElementsByClassName('services__indicator'),
            indicatorArr = Array.from(indicator);

    function changeSlide(e) {
        indicatorArr.forEach(function (item, i) {
            if (item === e.target && !item.classList.contains('active__indicator')) {
              item.classList.add('active__indicator');
              currentCol = item;
              setServiceContent(i);
            } else if (item !== e.target && e.target !== indicators) {
              item.classList.remove('active__indicator');  
            }
        })
    }

    function setServiceContent(pos) {
        servicesCols.forEach(function (item, i) {
            item.style.order = '0';
        })
        servicesCols[pos].style.order = '-1';
    }

    let initialPoint,
        finalPoint,
        rowToSwipe = document.querySelector('.services__row');

    rowToSwipe.addEventListener('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
        initialPoint = event.changedTouches[0];
    }, false);

    rowToSwipe.addEventListener('touchend', function(event) {
        event.preventDefault();
        event.stopPropagation();
        finalPoint = event.changedTouches[0];
        let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);

        if (xAbs > 20) {
            if (finalPoint.pageX > initialPoint.pageX) {
                if (currentCol.previousElementSibling) {
                    changeColBySwipe(-1, currentCol.previousElementSibling);
                    console.log(currentCol.previousElementSibling);
                }
            } else {
                if (currentCol.nextElementSibling) {
                    changeColBySwipe(1, currentCol.nextElementSibling);
                }
            }
        }
    }, false);

    function changeColBySwipe(num, sibling) {
        currentCol.classList.remove('active__indicator');
        sibling.classList.add('active__indicator');
        let currentIndex = indicatorArr.indexOf(currentCol);
        currentCol = sibling;
        setServiceContent(currentIndex + num);
    }
}