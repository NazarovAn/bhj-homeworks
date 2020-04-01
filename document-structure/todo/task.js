'use strict';

const addButton = document.getElementById('tasks__add'),
      taskList = document.getElementById('tasks__list'),
      input = document.getElementById('task__input');
      
setTasksList();

addButton.addEventListener('click', (e) => {
    if(input.value === ''){return};
    let task = input.value;

    placeNewElement(task);
    addRemove();
    storeTasks();

    input.value = '';   
})

function placeNewElement(taskText) {
    taskList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a></div>`);
}

function addRemove(){
    let removeList = document.querySelectorAll('.task__remove'),
        lastItem = removeList.length - 1,
        tasks = taskList.querySelectorAll('.task');

    removeList[lastItem].addEventListener('click', () => {
        taskList.removeChild(tasks[lastItem]);
        storeTasks();       
    })
}

function storeTasks() {
    let titles = taskList.querySelectorAll('.task__title'),
        storage = [];

    titles.forEach((e) => {
        storage.push(e.textContent);
    })

    if(storage.length === 0){
        localStorage.removeItem('tasks');
        return
    }

    localStorage.setItem('tasks', JSON.stringify(storage));
}

function setTasksList(){
    let storageList = JSON.parse(localStorage.getItem('tasks'));
    if(storageList == null){return};

    storageList.forEach((e) => {
        placeNewElement(e);
        addRemove();
    })    
}