'use strict';

const poll = document.querySelector('.poll');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
        let response = JSON.parse(xhr.responseText),
            responseid = response.id,
            title = response.data.title,
            answersXHR = response.data.answers,
            answersHTML = [];        
            
        answersXHR.forEach((item) => {
            answersHTML.push(`<button class="poll__answer">${item}</button>`);
        });

        poll.insertAdjacentHTML('beforeend' ,  `<div class="poll__title" id="poll__title">
                                                    ${title}
                                                </div>
                                                <div class="poll__answers poll__answers_active" id="poll__answers">
                                                    ${answersHTML.join('')}
                                                </div>`);

        let answersList = document.querySelectorAll('.poll__answer');
        
        answersList.forEach((item) => {
            item.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');

                let answers = poll.querySelector('.poll__answers').children,
                    answersArr = Array.from(answers),
                    indexOfAnswer = answersArr.indexOf(item);

                const newXhr = new XMLHttpRequest();
                newXhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                newXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                newXhr.send(`vote=${responseid}&answer=${indexOfAnswer}`);

                newXhr.addEventListener('load', () => {
                    let newXhrResponse = JSON.parse(newXhr.response),
                        stat = newXhrResponse.stat,
                        statHTML = [];

                        stat.forEach((item) => {
                            statHTML.push(`<div>${item.answer}: ${item.votes}</div>`);
                        });                        

                    poll.innerHTML = "";
                    poll.insertAdjacentHTML('beforeEnd', `${statHTML.join('')}`);
                });                
            })
        })
    }        
})