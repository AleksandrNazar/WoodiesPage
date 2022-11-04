const menu = document.querySelector('.burger-menu');
const submenu = document.querySelector('.header-mobile-nav');
let is_open = 0;

menu.addEventListener('click', () => {
    if(!is_open) {
        submenu.style.display = 'block';
        is_open = 1;
    } else {
        submenu.style.display = 'none';
        is_open = 0;
    }
});


const slides = document.querySelectorAll('.text-scrin>a')
const dots = document.querySelectorAll('.slider>span');

let activeSlide = 0;

const reset = () => {
    dots.forEach(dot => dot.removeAttribute('class'));
    dots[activeSlide].className = 'active';

    slides.forEach(slide => slide.style.display = 'none');
    slides[activeSlide].style.display = 'block';
}

reset ();

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        activeSlide = index;
        reset ();
    })

});