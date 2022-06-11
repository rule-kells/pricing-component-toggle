const inputToggle = document.getElementById('toggle')
const cardWrapper = document.querySelector('.card__wrapper')

inputToggle.addEventListener('click', ev => {
    cardWrapper.classList.toggle('toggle-price')
})