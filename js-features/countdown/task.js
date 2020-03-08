'use strict';

const timer = document.getElementById('timer');

let startTime = timer.textContent;

function writeTime(){        
    let hours = Math.floor(startTime / 3600),
        minutes = Math.floor(startTime % 3600 / 60),
        seconds = startTime % 60;

    if(hours < 10){
    hours = '0' + hours;
    }

    if(minutes < 10){
    minutes = '0' + minutes;
    }

    if(seconds < 10){
    seconds = '0' + seconds;
    }

    timer.textContent = `${hours}:${minutes}:${seconds}`;
}

let timerId = setInterval(() => {
    if(startTime == 0){
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);

        downloadClick.click();

        // let newLocation = '/bhj-homeworks/js-features/countdown/extended-demo.gif';
        // window.location = newLocation;
    } else {
        startTime --;
        writeTime();        
    }
}, 1000)