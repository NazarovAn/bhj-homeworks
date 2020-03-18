'use strict';

document.getElementById('modal_main').className = 'modal modal_active';

const modalClose = Array.from(document.querySelectorAll('.modal__close')),
      modalMain = document.getElementById('modal_main'),
      modalCose = document.getElementById('modal_success');


for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = () => {
        modalMain.className = 'modal';
        modalCose.className = 'modal';    
    }
}

document.querySelector('.show-success').onclick = () => {
    modalMain.className = 'modal';
    modalCose.className = 'modal modal_active';    
}