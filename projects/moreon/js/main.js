    // ТАБЫ

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

    // СВАЙПЕР

    new Swiper('.stock__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.stock__pagination',
            // type: 'fraction',
            clickable: true,
        },

        navigation: {
            nextEl: '.stock__next',
            prevEl: '.stock__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 2,
            },
            801: {
                spaceBetween: 30,
            },
            1101: {
                slidesPerView: 3,
            },

        }
    });
