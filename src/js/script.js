window.addEventListener('DOMContentLoaded', function() {
    'use strict';

// SLIDER
    let slideIndex = 1,
        slides = document.querySelectorAll('.carousel__item'),
        prew = document.querySelector('.prew'),
        next = document.querySelector('.next');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }

    prew.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
});