let toggleButton = document.querySelector('.show-filters');
let filters = document.querySelector('.filter__col');

toggleButton.addEventListener('click', toggle);

function toggle() {
    filters.classList.toggle('active__filters');
    toggleButton.textContent === 'Показать фильтры' ? toggleButton.textContent = 'Скрыть фильтры' : toggleButton.textContent = 'Показать фильтры';
}