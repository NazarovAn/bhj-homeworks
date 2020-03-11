'use strict';

document.getElementById('modal_main').className = 'modal modal_active';

const modalClose = Array.from(document.querySelectorAll('.modal__close'));

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = () => {
        document.getElementById('modal_main').className = 'modal';
        document.getElementById('modal_success').className = 'modal';    
    }
}

document.querySelector('.show-success').onclick = () => {
    document.getElementById('modal_main').className = 'modal';
    document.getElementById('modal_success').className = 'modal modal_active';    
}