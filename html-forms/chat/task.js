'use strict';

const widget = document.querySelector('.chat-widget'),
      input = document.querySelector('.chat-widget__input'),
      messages = document.querySelector('.chat-widget__messages'),
      messagesContainer = document.querySelector('.chat-widget__messages-container'),
      botAnswers = [
          'Come with me if you want to live…',
          'I need your clothes, your boots, and your motorcycle',
          'You are terminated',
          'Hasta la vista, baby',
          'I’ll be back'
      ];

function getRandomAnswer(max) {
    let randomNum = Math.floor(Math.random() * max);

    return botAnswers[randomNum];
}

function writeTime() {
    let newDate = new Date,
        minutes = newDate.getMinutes(),
        hours = newDate.getHours();

    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }

    return`${hours}:${minutes}`
}

function writeMessage(text) {
    messages.insertAdjacentHTML('beforeEnd',`
                        <div class="message">
                            <div class="message__time">${writeTime()}</div>
                            <div class="message__text">${text}</div>
                        </div>
    `);       
}

function scrollDown(){
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function radioCheck() {
    let intervalId = setInterval(() => {
        writeMessage('Прием! Вы на связи?');
        scrollDown();
    }, 30000);

    input.addEventListener('input',() => clearInterval(intervalId));
}

widget.addEventListener('click', () => {
    if(!widget.classList.contains('chat-widget_active')){
        widget.classList.add('chat-widget_active');

        writeMessage('Добрый день!');
        radioCheck();
    }
});

input.addEventListener('keydown', (e) =>{
    if(e.key !== 'Enter' || input.value == ''){
        return
    }

    writeMessage(input.value);
    writeMessage(getRandomAnswer(botAnswers.length));
    radioCheck();
    scrollDown();
    
    input.value = '';
});


