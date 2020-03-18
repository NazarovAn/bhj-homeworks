'use strict';

const dropdown = document.querySelector('.dropdown__value'),
      dropdownList = document.querySelector('.dropdown__list'),
      dropdownListClassList = dropdownList.classList,
      dropdownItems = Array.from(document.querySelectorAll('.dropdown__item '));

function openCloseDropdown() {
    dropdownListClassList.toggle('dropdown__list_active');
}

dropdown.addEventListener('click', () => openCloseDropdown());

for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click',
        function(event) {
            event.preventDefault();
            openCloseDropdown();
            dropdown.textContent = dropdownItems[i].textContent;        
    })
}