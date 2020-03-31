'use strict';

const modal = document.getElementById('subscribe-modal'),
      modalClose = document.querySelector('.modal__close');
      
let cookie = document.cookie;

if(!cookie.includes('closed=true')){
    window.addEventListener('load', () => modal.classList.add('modal_active'));
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active');    
        document.cookie = 'closed=true';
    });
}
