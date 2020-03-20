'use strict';

const banner = document.querySelectorAll('.reveal'),
      windowHeight = window.innerHeight;


for (let i = 0; i < banner.length; i++) {    
    document.addEventListener('scroll', () => {
        if(windowHeight > banner[i].getBoundingClientRect().top){
         banner[i].classList.add('reveal_active');        
        }
    });
}