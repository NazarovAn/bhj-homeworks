'use strict';

const sliderItems = Array.from(document.querySelectorAll('.slider__item')),
      sliderDots = Array.from(document.querySelectorAll('.slider__dot')),
      nextArrow = document.querySelector('.slider__arrow_next'),
      prevArrow = document.querySelector('.slider__arrow_prev');

let classIndex = 0;
      
function hideItem() {
    sliderItems[classIndex].className = 'slider__item';
    sliderDots[classIndex].className = 'slider__dot';
}

function showItem() {
    sliderDots[classIndex].className = 'slider__dot_active';
    sliderItems[classIndex].className = 'slider__item slider__item_active';
}

nextArrow.onclick = () => {
    if (classIndex === sliderItems.length - 1) {
        hideItem();
        classIndex = 0;
    } else {
        hideItem();
        classIndex ++;
    }

    showItem();
}

prevArrow.onclick = () => {
    if (classIndex === 0) {
        hideItem();
        classIndex = sliderItems.length - 1;
    } else {
        hideItem();
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