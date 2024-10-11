// Выпадающее меню
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('click', function (e) {
        e.preventDefault();
        let menu = this.querySelector('.dropdown__menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});

// Слайдер
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.client__logos');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let scrollPosition = 0;
    const logoWidth = 381; 
    const visibleLogosCount = Math.floor(slider.parentElement.clientWidth / logoWidth); 
    const maxScroll = (logoWidth * (slider.children.length - visibleLogosCount)); 

    // Кнопка "вперед"
    nextBtn.addEventListener('click', function () {
        if (scrollPosition < maxScroll) {
            scrollPosition += logoWidth;
            if (scrollPosition > maxScroll) scrollPosition = maxScroll;
            slider.style.transform = `translateX(-${scrollPosition}px)`;
        }
    });

    // Кнопка "назад"
    prevBtn.addEventListener('click', function () {
        if (scrollPosition > 0) {
            scrollPosition -= logoWidth;
            if (scrollPosition < 0) scrollPosition = 0; 
            slider.style.transform = `translateX(-${scrollPosition}px)`;
        }
    });

    // Тач-скролл для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchEndX < touchStartX) {
            if (scrollPosition < maxScroll) {
                scrollPosition += logoWidth;
                if (scrollPosition > maxScroll) scrollPosition = maxScroll;
                slider.style.transform = `translateX(-${scrollPosition}px)`;
            }
        }
        if (touchEndX > touchStartX) {
            if (scrollPosition > 0) {
                scrollPosition -= logoWidth;
                if (scrollPosition < 0) scrollPosition = 0;
                slider.style.transform = `translateX(-${scrollPosition}px)`;
            }
        }
    }
});

// гамбургер
document.getElementById('hamburger').addEventListener('click', function () {
    const navMenu = document.getElementById('navMenu');
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
});

