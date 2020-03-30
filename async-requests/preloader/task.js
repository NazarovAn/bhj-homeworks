'use strict';

const loader = document.getElementById('loader'),
      items = document.getElementById('items');

let itemsLocal = JSON.parse(localStorage.getItem('previousData'));

if(itemsLocal != null){
    loader.classList.remove('loader_active');
    items.innerHTML = itemsLocal;
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/', true);
xhr.send();

let response, valute;

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
        response = JSON.parse(xhr.responseText);        
        valute = response.response.Valute;
        
        loader.classList.remove('loader_active');
        items.innerHTML = '';
        console.log('xhr.DONE');        

        for (let key in valute) {
            let element = valute[key],
                charCode = element.CharCode,
                value = element.Value;

            items.insertAdjacentHTML('beforeend',  `<div class="item">
                                                        <div class="item__code">
                                                            ${charCode}
                                                        </div>
                                                        <div class="item__value">
                                                            ${value}
                                                        </div>
                                                        <div class="item__currency">
                                                            руб.
                                                        </div>
                                                    </div>`)   
            }        
        
        localStorage.setItem('previousData', JSON.stringify(items.innerHTML));
        }
    }
);