'use strict';

const hasTooltipsList = document.querySelectorAll('.has-tooltip');

hasTooltipsList.forEach((item) => {    
    item.insertAdjacentHTML('beforeEnd' , `<div class="tooltip" style="left: 0; top: 0">${item.title}</div>`);
    let tooltip = item.querySelector('.tooltip');

    tooltip.style.left = `${item.offsetLeft}px`;
    tooltip.style.top = `${item.offsetTop + item.offsetHeight}px`;

    item.addEventListener('click', (item) => {
        item.preventDefault();

        if(tooltip.classList.contains('tooltip_active')){
            hideAllTooltips();
            return
        }
        
        hideAllTooltips();

        tooltip.classList.add('tooltip_active');
    })
})

const tooltipsList = document.querySelectorAll('.tooltip');

function hideAllTooltips() {
    tooltipsList.forEach((item) => item.classList.remove('tooltip_active'));
}