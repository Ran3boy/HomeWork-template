(function() {

    document.addEventListener('click', burgerInit )

    function burgerInit(e) {
        
        const targer = e.target
        const burgerIcon = target.closest('burger-icon')

        if(burgerIcon) {
            
        }
    }

})()

const btn = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')
const body = document.body

const openModal = () => {
    modal.classList.add('body--opened-modal')
    body.classList.add('body--opened-menu')
}

const closeModal = () => {
    modal.classList.remove('body--opened-modal')
    body.classList.add('body--opened-menu')
}


btn.addEventListener('click', openModal)

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('body--opened-modal')) {
        closeModal()
    }
})