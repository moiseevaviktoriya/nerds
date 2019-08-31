'use strict';
const products = [
    {
        'title': 'Sedona',
        'description': 'Информационный сайт для туристов',
        'img': './icons/img-sedona.png',
        'price': 7000,
        'layout': 'Адаптивная',
        'features': ['Слайдер', 'Блок преимуществ', 'Корзина']
    },
    {
        'title': 'Pink App',
        'description': 'Продуктовый лендинг приложения для iOS и Android',
        'img': './icons/img-pink.png',
        'price': 8000,
        'layout': 'Резиновая',
        'features': ['Слайдер', 'Галерея', 'Корзина']
    },
    {
        'title': 'Barbershop',
        'description': 'Сайт салоны красоты. Для мужчин, да.',
        'img': './icons/img-barbershop.png',
        'price': 5000,
        'layout': 'Фиксированная',
        'features': ['Новости', 'Галерея']
    },
    {
        'title': 'Mishka',
        'description': 'Интернет-магазин  вязаных игрушек',
        'img': './icons/img-mishka.png',
        'price': 10000,
        'layout': 'Адаптивная',
        'features': ['Слайдер', 'Блок преимуществ', 'Галерея', 'Корзина']
    },
    {
        'title': 'A Plus',
        'description': 'Лендинг курсов повышения квалификации',
        'img': './icons/img-aplus.png',
        'price': 5500,
        'layout': 'Резиновая',
        'features': ['Блок преимуществ', 'Галерея', 'Новости']
    },
    {
        'title': 'Кваст',
        'description': 'Промо-сайт производителя крафтового кваса',
        'img': './icons/img-kvast.png',
        'price': 12000,
        'layout': 'Адаптивная',
        'features': ['Блок преимуществ', 'Галерея', 'Новости', 'Слайдер', 'Корзина']
    }
];

let productsRow = document.getElementsByClassName('products__row')[0],
stepsSlider = document.getElementById('steps-slider'),
input0 = document.getElementById('minprice'),
input1 = document.getElementById('maxprice'),
inputs = [input0, input1],
    minprice,
    maxprice,
button = document.getElementsByClassName('filter__button')[0],
    resetButton = document.querySelector('.reset'),
type = '',
features = [];
let filteredProductList = [];

let toggleButton = document.querySelector('.show-filters');
let filters = document.querySelector('.filter__col');

toggleButton.addEventListener('click', toggle);

function toggleFilters() {
    filters.classList.toggle('active__filters');
    toggleButton.textContent === 'Показать фильтры' ? toggleButton.textContent = 'Скрыть фильтры' : toggleButton.textContent = 'Показать фильтры';
}

let radioOptions = document.getElementsByClassName('radio');


noUiSlider.create(stepsSlider, {
    start: [0, 15000],
    connect: true,
    range: {
        'min': [0],
        '10%': [150],
        '50%': [7500],
        '80%': 12000,
        'max': 15000
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
    minprice = input0.value;
    maxprice = input1.value;
});


function showProducts(array) {
    while (productsRow.firstChild) {
       productsRow.firstChild.remove(); 
    }
    for (let i = 0; i < array.length; i++) {
        let product = document.createElement('div'),
            browserTop = document.createElement('div'),
            productImage = document.createElement('div'),
            img = document.createElement('img'),
            info = document.createElement('div'),
            title = document.createElement('h3'),
            description = document.createElement('p'),
            button = document.createElement('a');

        img.src = array[i].img;
        title.textContent = array[i].title;
        description.textContent = array[i].description;
        button.href = '#';
        button.textContent = array[i].price + ' руб.';

        product.classList.add('column','product__col');
        browserTop.classList.add('browser-top');
        productImage.classList.add('product-image');
        info.classList.add('product-info');
        title.classList.add('product-info__title');
        description.classList.add('product-info__description');
        button.classList.add('button', 'product-info__button', 'button-red');

        productImage.append(img);
        info.append(title, description, button);
        product.append(browserTop, productImage, info);
        productsRow.append(product);
    }
    
    if (array.length === 0) {
        let noProducts = document.createElement('h3');
        noProducts.textContent = 'Извините, но ничего не найдено';
        noProducts.classList.add('product-info__title');
        productsRow.append(noProducts);
    }
}

function byField(field, num) {
  return (a, b) => a[field] < b[field] ? +num : -num;
}

let defaultProductList = products.sort(byField('price', 1));

let currentProductList = defaultProductList;
let currentSortType = document.getElementsByClassName('sorting-item-active')[0];
let currentSortNum = document.getElementsByClassName('sorting-icon-active')[0].firstChild;


showProducts(currentProductList); //показать товары по умолчанию (отсортированы по убыванию по цене)

let sortingItems = Array.from(document.getElementsByClassName('sorting-item')),
    increse = document.getElementsByClassName('sorting-icon')[1],
    decrese = document.getElementsByClassName('sorting-icon')[0];

sortingItems.forEach(function(item, i) {
  item.addEventListener('click', sort);
});

increse.addEventListener('click', sort);
decrese.addEventListener('click', sort);

function sort(event) {
    let sortedList;
    if(event.target.tagName === "SPAN") {
        document.getElementsByClassName('sorting-icon-active')[0].classList.remove('sorting-icon-active');
        event.target.parentNode.classList.add('sorting-icon-active');
        sortedList = currentProductList.sort(byField(currentSortType.dataset.type, event.target.dataset.num));
        
    } else {
        sortingItems.forEach(function(item) {
            item.classList.remove('sorting-item-active');
        });
        event.target.classList.add('sorting-item-active');
        sortedList = currentProductList.sort(byField(event.target.dataset.type, currentSortNum.dataset.num));
    }
    currentSortNum = document.getElementsByClassName('sorting-icon-active')[0].firstChild;
    currentSortType = document.getElementsByClassName('sorting-item-active')[0];
    currentProductList = sortedList;
    showProducts(currentProductList);
    
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    let radioOptions = Array.from(document.getElementsByClassName('radio'));
    radioOptions.forEach(function(elem){
        if (elem.checked) {
            type = elem.value;
        }
    });
    
    let checkBoxOptions = Array.from(document.getElementsByClassName('checkbox'));
    checkBoxOptions.forEach(function(elem){
        if (elem.checked) {
            features.push(elem.value);
        }
    });
    
    
    defaultProductList.forEach(function(product) {
        
        function featuresCheck() {
            if (features.length !== 0) {
                return product.features.some(function(feature) {
                    return features.indexOf(feature) > -1;                 
                });
            } else return true;
        }
        
        if (product.price >= minprice && product.price <= maxprice && product.layout === type && featuresCheck()) {
            filteredProductList.push(product);
        }
    });
    currentProductList = filteredProductList.sort(byField(currentSortType.dataset.type, currentSortNum.dataset.num));
    showProducts(currentProductList);
    filteredProductList = [];
    features = [];
    
    if (window.innerWidth >= '768') {
        toggleFilters();
    }
});

resetButton.addEventListener('click', (event) => {
    document.location.reload(true);
});


   