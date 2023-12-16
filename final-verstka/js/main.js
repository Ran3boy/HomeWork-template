(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        console.log()

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if(!document.body.classList.contains('body--opened-modal')) {
            document.body.classList.add('body--opened-modal')
        } else {
            document.body.classList.remove('body--opened-modal')
        }
    }

})()


const btn = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')

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
    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('body--opened-modal')) {
        closeModal()
    }
})