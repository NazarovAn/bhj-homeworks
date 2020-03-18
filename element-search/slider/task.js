'use strict';

const sliderItems = Array.from(document.querySelectorAll('.slider__item')),
      sliderDots = Array.from(document.querySelectorAll('.slider__dot')),
      nextArrow = document.querySelector('.slider__arrow_next'),
      prevArrow = document.querySelector('.slider__arrow_prev');

let classIndex = 0;
      
function hideItem() {
    sliderItems[classIndex].classList.remove('slider__item_active');
    sliderDots[classIndex].classList.remove('slider__dot_active');
}

function showItem() {
    sliderDots[classIndex].classList.add('slider__dot_active');
    sliderItems[classIndex].classList.add('slider__item_active');
}

nextArrow.onclick = () => {
    hideItem();
    if (classIndex === sliderItems.length - 1) {
        classIndex = 0;
    } else {
        classIndex ++;
    }

    showItem();
}

prevArrow.onclick = () => {
    hideItem();
    if (classIndex === 0) {
        classIndex = sliderItems.length - 1;
    } else {
        classIndex --;
    }
    
    showItem();
}

for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = () => {
        hideItem();
        classIndex = i;
        showItem();
    }    
}