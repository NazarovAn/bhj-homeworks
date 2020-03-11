'use strict';

const subMenu = Array.from(document.getElementsByClassName('menu_sub'));

function isMenuActive() {
    return subMenu.includes(document.querySelector('.menu_active'))
}

function closeMenu() {
    let index = subMenu.indexOf(document.querySelector('.menu_active'));
    subMenu[index].className = 'menu menu_sub';
}

for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].closest('li').onclick = (e) => {        
        e.preventDefault();

        if (subMenu[i].className === 'menu menu_sub menu_active') {
            closeMenu();
            return
        } else if(isMenuActive()){
            closeMenu();            
        }

        subMenu[i].className = 'menu menu_sub menu_active';
    }
}