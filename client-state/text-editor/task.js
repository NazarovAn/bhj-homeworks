'use srtict';

const editor = document.getElementById('editor'),
      clearBtn = document.querySelector('.editor__clear');

editor.value = localStorage.getItem('inputValue');

editor.addEventListener('input', () => {
    localStorage.setItem('inputValue', editor.value);    
})

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    editor.value = '';
})