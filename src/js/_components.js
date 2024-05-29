import fixedHeader from "./components/fixed-header";
import hamburger from "./components/hamburger";
import {customSelect, calculateCost, modifyPageCount} from "./components/calculator";
import ticker from "./components/ticker";
import faq from "./components/faq";
import tabs from "./components/tabs";

document.addEventListener('DOMContentLoaded', () => {
    fixedHeader();
    hamburger();

    if (document.body.classList.contains('is-home-page') || document.body.classList.contains('is-seo-page')) {
        customSelect();
        calculateCost();

        const increaseButton = document.querySelector('#increase');
        const decreaseButton = document.querySelector('#decrease');

        increaseButton.addEventListener('click', () => modifyPageCount(1, event));
        decreaseButton.addEventListener('click', () => modifyPageCount(-1, event));
        faq('.faq__inner', '.faq__question', '.faq__answer');
        ticker();
        faq('.work__item', '.work__title', '.work__answer');
        tabs('.js-tab-link', '.work__picture', '.work__content', '.work__image-group');
    
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                ticker();
            }
        });
    }

    if (document.body.classList.contains('is-about-page')) {
        faq('.faq__inner', '.faq__question', '.faq__answer');
        ticker();
        faq('.work__item', '.work__title', '.work__answer');
        tabs('.js-tab-link', '.work__picture', '.work__content', '.work__image-group');
    
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                ticker();
            }
        });
    }
});