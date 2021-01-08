const open_ = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open_.addEventListener('click', () => {
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})