'use strict';

const signin = document.getElementById('signin'),
      signBtn = document.getElementById('signin__btn'),
      welcome = document.getElementById('welcome'),
      welcomeID = document.getElementById('user_id'),
      logout = document.getElementById('logout');

let user = JSON.parse(localStorage.getItem('userID'));

if(user == null){
    signin.classList.add('signin_active');
    signBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let formData = new FormData(document.forms.signin__form);
        sendForm(formData);
    });
} else {
    welcomeUser(user);
}

function sendForm(formData) {
    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        if(!xhr.response.success){
            alert(`Неверные логин/пароль`);
            return
        }

        if(user == null){
            localStorage.setItem('userID', JSON.stringify(xhr.response.user_id));
            signin.classList.remove('signin_active');                       
        }

        welcomeUser(xhr.response.user_id);        
    })
} 

function welcomeUser(user){
    welcome.classList.add('welcome_active');
    welcomeID.innerText = user;

    logout.addEventListener('click', () => {
        localStorage.removeItem('userID');
        location.reload();
    })
}