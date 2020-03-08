'use strict';

const cookie = document.getElementById('cookie'),
      counter = document.getElementById('clicker__counter');

let lastClick = 0;

cookie.onclick = () => {
    counter.textContent ++;

    let newClick = new Date().getTime();

    let diff = newClick - lastClick,    
        clicksInSecond = 1000/diff;

    average_counter.textContent = clicksInSecond.toFixed(2);    

    lastClick = new Date().getTime();

    if(cookie.width != 200){
        cookie.width = 200;
    } else {
        cookie.width = 180;
    }
}