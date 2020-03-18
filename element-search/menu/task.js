'use strict';

const subMenu = Array.from(document.getElementsByClassName('menu_sub'));

function isMenuActive(i) {
    let closestMenu = subMenu[i].closest('.menu_main');    
    
    return subMenu.includes(closestMenu.querySelector('.menu_active'))
}

function closeMenu(i) {
    let closestMenu = subMenu[i].closest('.menu_main');    
    
    let index = subMenu.indexOf(closestMenu.querySelector('.menu_active'));
    subMenu[index].className = 'menu menu_sub';
}

for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].closest('li').onclick = (e) => {        
        e.preventDefault();

        if (subMenu[i].className === 'menu menu_sub menu_active') {
            closeMenu(i);
            return
        } else if(isMenuActive(i)){
            closeMenu(i);            
        }

        subMenu[i].className = 'menu menu_sub menu_active';
    }
}