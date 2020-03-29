'use strict';

const interestsLi = document.querySelectorAll('.interest');

function toggleCheckAllChildren(element) {
    let closestLi = element.target.closest('.interest');
    let checkboxList = closestLi.querySelectorAll('.interest__check');

    if(element.target.checked){
        checkboxList.forEach((element) => element.checked = true);                   
    } else {
        checkboxList.forEach((element) => element.checked = false);
    }
}

function toggleCheckParent(element){
    let parentUl = element.target.closest('.interests_active'),
        parentLi = parentUl.closest('.interest'),
        parentCheckbox = parentLi.querySelector('.interest__check'),
        checkboxSiblingsList = parentUl.querySelectorAll('.interest__check'),
        checkedCounter = 0;
        
    checkboxSiblingsList.forEach((item) => item.checked === true ? checkedCounter ++ : false);
        
    if(checkedCounter === checkboxSiblingsList.length){
        parentCheckbox.indeterminate = false;
        parentCheckbox.checked = true;
    } else if(checkedCounter === 0) {
        parentCheckbox.indeterminate = false;
        parentCheckbox.checked = false;
    } else {
        parentCheckbox.indeterminate = true;
    }
}

interestsLi.forEach((item) => item.addEventListener('change', (e) => {
    toggleCheckAllChildren(e);
    toggleCheckParent(e);
}));