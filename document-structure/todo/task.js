'use strict';

const addButton = document.getElementById('tasks__add'),
      taskList = document.getElementById('tasks__list');

taskList.innerHTML = JSON.parse(localStorage.getItem('taskListLocal'));

taskList.querySelectorAll('.task__remove').forEach((item) => item.addEventListener('click', (elem) => {
    elem.preventDefault();

    taskList.removeChild(item.closest('.task')); 

    localStorage.setItem('taskListLocal', JSON.stringify(taskList.innerHTML));
}));

addButton.addEventListener('click', (button) => {
    button.preventDefault();
    new Task;
});

class Task {
    constructor(){
        this.taskIntput = document.getElementById('task__input');
        this.taskList = document.getElementById('tasks__list'); 
        this.inputText = this.taskIntput.value;       

        this.setNewElement();
        this.setRemove();
        this.storeTasks();              
    }

    setNewElement() {
        if(this.inputText == 0){
            return
        }
        this.newElement = `<div class="task"><div class="task__title">${this.inputText}</div><a href="#" class="task__remove">&times;</a></div>`
        this.taskList.insertAdjacentHTML('beforeEnd', this.newElement);
    }

    getLatestElement() {
        this.indexOfLastTask = this.taskList.querySelectorAll('.task').length - 1;
        return this.taskList.querySelectorAll('.task')[this.indexOfLastTask];        
    }

    setRemove() {
        this.taskToRemove = this.getLatestElement();
        this.removeButton = this.taskToRemove.querySelector('.task__remove');

        this.removeButton.addEventListener('click', () => {
            this.taskList.removeChild(this.taskToRemove);
            this.storeTasks();            
        })
    }

    storeTasks() {
        this.relevantTaskList = document.getElementById('tasks__list'),
        this.relevantTaskListJSON = JSON.stringify(this.relevantTaskList.innerHTML);

        localStorage.setItem('taskListLocal', this.relevantTaskListJSON);
    }
}