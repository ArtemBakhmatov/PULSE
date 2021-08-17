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

    // TABS

    // let tab = document.querySelectorAll('.catalog__tab'),
    //     tabs = document.querySelector('.catalog__tabs'),
    //     tabContent = document.querySelectorAll('.catalog__content');

    // function hideTabContent(a) {
    //     for (let i = a; i < tabContent.length; i++) {
    //         tabContent[i].classList.remove('catalog__content_active');
    //         tabContent[i].classList.add('catalog__content');
    //     }
    // }  

    // hideTabContent(1);  
    
    // function showTabContent(b) {
    //     if (tabContent[b].classList.contains('catalog__content')) {
    //         tabContent[b].classList.remove('catalog__content');
    //         tabContent[b].classList.add('catalog__content_active');
    //     }
    // }

    // tabs.addEventListener('click', function(event) {
    //     let target = event.target;
    //     if (target && target.classList.contains('catalog__tab')) {
    //         for(let i = 0; i < tab.length; i++) {
    //             if (target == tab[i]) {
    //                 hideTabContent(0);
    //                 showTabContent(i);
    //                 break;
    //             }
    //         }
    //     }

    // });
});

$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});


