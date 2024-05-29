import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const expertsSlide = new Swiper('.experts__slider-container', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.experts__button-next',
        prevEl: '.experts__button-prev',
    },
    pagination: false,
    loop: true,
    breakpoints: {
        1280: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        },
    },
});

if (window.innerWidth <= 767) {
    let tickerSlide = new Swiper('.ticker__slider-container', {
        spaceBetween: 20,
        pagination: {
            el: '.ticker__swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
            },
        },
    });
}

const priceSlide = new Swiper('.price__slider-container', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.price__button-next',
        prevEl: '.price__button-prev',
    },
    pagination: false,
    loop: false,
    breakpoints: {
        1280: {
            slidesPerView: 3,
        },
        768: {
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 24,
            loop: true,
        },
        360: {
            loop: true,
            slidesPerView: 1,
        },
    },
});