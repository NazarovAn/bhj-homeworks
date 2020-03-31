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

        let formData = new FormData(document.forms.signin__form),
            login = formData.get('login'),
            password = formData.get('password'),
            userID = {login,password};        

        sendForm(formData, userID);
    });
} else {
    let formData = new FormData,        
        login = user.login,
        password = user.password,
        userID = {user:login, password:password};

    formData.append('login', `${user.login}`);
    formData.append('password', `${user.password}`);   

    sendForm(formData, userID);
}

function sendForm(formData, userID) {
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
            localStorage.setItem('userID', JSON.stringify(userID));
            signin.classList.remove('signin_active');                       
        }

        welcome.classList.add('welcome_active');
        welcomeID.innerText = xhr.response.user_id;

        logout.addEventListener('click', () => {
            localStorage.removeItem('userID');
            location.reload();
        })
    })
} 