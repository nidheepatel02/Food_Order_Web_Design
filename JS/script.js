const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', { delay: 300 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.container', { delay: 400 });

sr.reveal('.slide-container, .slide-content, .card-wrapper, .card, .image-content', { delay: 400 });
sr.reveal('.card-image, .card-content', { delay: 400 });

sr.reveal('.about-img', {});
sr.reveal('.about-text', { delay: 300 });

sr.reveal('.middle-text', {});
sr.reveal('.row-btn, .menu-content', { delay: 300 });

sr.reveal('.review-content, .contact', { delay: 300 });



/*----------------------Swiper-------------------*/

var swiper = new Swiper(".slide-content", {
    slidePerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextzfl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidePerView: 1,
        },

        520: {
            slidePerView: 2,
        },

        950: {
            slidePerView: 3,
        },
    },
});