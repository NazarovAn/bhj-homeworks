'use strict';

const tabs = document.querySelectorAll('.tab'),
      tabsContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {        
        let parentElement = e.target.closest('.tabs');        

        let activeTab = parentElement.querySelector('.tab_active'),
            activeContent = parentElement.querySelector('.tab__content_active');

        activeContent.classList.remove('tab__content_active');
        activeTab.classList.remove('tab_active');

        tabsContent[i].classList.add('tab__content_active');
        tabs[i].classList.add('tab_active');
    })
}