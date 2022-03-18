const modal = document.querySelector('.modal')
const btn1 = document.querySelectorAll('.button1')
const closeBtn = document.querySelector('.modal__close-btn')

btn1.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modal.classList.add('visible')
    })
})


closeBtn.addEventListener('click', () => {
    modal.classList.remove('visible')
    modal.classList.add('hidden')
})