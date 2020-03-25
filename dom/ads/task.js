'use strict';

const rotatorItems = document.querySelectorAll('.rotator__case');
let i = 0, 
    dataSpeed = 1000,
    dataColor;

let nextItem = () => {
    dataColor = rotatorItems[i].getAttribute('data-color');
    dataSpeed = rotatorItems[i].getAttribute('data-speed');
    rotatorItems[i].style.color = dataColor;
    
    let intervalId = setTimeout(() => {
        if(i === 5){
            rotatorItems[i].classList.remove('rotator__case_active');
            i = 0;
            rotatorItems[i].classList.add('rotator__case_active');
        } else {
            rotatorItems[i].classList.remove('rotator__case_active');
            rotatorItems[i].nextElementSibling.classList.add('rotator__case_active');
            i++;
        }
        
        nextItem();
    }, dataSpeed);
}

nextItem();