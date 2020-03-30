'use strict';

const progress = document.getElementById('progress'),
      sendBtn = document.getElementById('send'),
      input = document.getElementsByTagName('input');

sendBtn.addEventListener('click', (element) => {
    element.preventDefault();
    let sendItem = input.file.files[0];

    const xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', (event) => {
        progress.value = event.loaded / event.total;             
    });    
    xhr.send(sendItem);
    xhr.upload.onload = () => alert(`Uploaded`);    
})