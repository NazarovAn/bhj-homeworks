'use strict';

const productsList = document.querySelectorAll('.product'),
      cartContainer = document.querySelector('.cart'),
      productsCart = document.querySelector('.cart__products'),
      cartList = [];

function setControlsListners(element) {
    let controlDec = element.querySelector('.product__quantity-control_dec'),
        controlInc = element.querySelector('.product__quantity-control_inc'),
        controlValue = element.querySelector('.product__quantity-value');

        controlDec.addEventListener('click', () => {
            if(controlValue.innerText <= 1){
                return
            } else {
                controlValue.innerText --
            }
        });

        controlInc.addEventListener('click', () => {
            controlValue.innerText ++
        })
}

function setAddDeleteFromCart(element) {
    let getInCartButton = element.querySelector('.product__add');

    getInCartButton.addEventListener('click', () => {
        let elementId = element.getAttribute('data-id'),
            elementImageSrc = element.querySelector('.product__image').src,
            elementQuantity = element.querySelector('.product__quantity-value').innerText,
            cartItemQuantity = document.querySelectorAll('.cart__product-count'),
            sameItemIndex = cartList.indexOf(elementId);            

        if(cartList.includes(elementId)){
            cartItemQuantity[sameItemIndex].innerText = parseInt(cartItemQuantity[sameItemIndex].innerText) + parseInt(elementQuantity);
            if(elementQuantity != 0){    
                inCartAnimation();
            }
            return            
        }

        if(elementQuantity == 0){
            return
        }

        productsCart.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${elementId}">
            <img class="cart__product-image" src="${elementImageSrc}">
            <div class="cart__product-count">${elementQuantity}</div>
            <a href="" class="cart__product-delete">X</a>
        </div>
        `);

        cartList.push(elementId);
        cartContainer.style.display = '';
        
        let itemDeleteList = cartContainer.querySelectorAll('.cart__product-delete'),
            cartItemList = cartContainer.querySelectorAll('.cart__product'),
            cartItemIndex = cartList.length - 1;

        function inCartAnimation() {
            let newElemHTML = `<img class="cart__product-image product__image-animation" src="${elementImageSrc}">`,
                cartItemList = cartContainer.querySelectorAll('.cart__product'),
                cartItemIndex = cartList.length - 1;

            function animate(left,top) { 
                productsCart.insertAdjacentHTML('beforeBegin', newElemHTML);

                let animationImg = cartContainer.querySelector('.product__image-animation'),
                    destinedX = cartItemList[cartItemIndex].getBoundingClientRect().left,
                    destinedY = element.getBoundingClientRect().top;

                animationImg.style.left = `${destinedX * left}px`;
                animationImg.style.top = `${destinedY * top}px`;
                setTimeout(() => cartContainer.removeChild(animationImg), 5);
            }
            
            let x = 0,
                y = 1;

            let intervalID = setInterval(() => {                
                x += 0.1;
                y -= 0.1;

                animate(x,y);

                if(x >= 0.9 || y <= 0.1){
                    clearInterval(intervalID);
                }            
            }, 15);
        }
        
        inCartAnimation();

        itemDeleteList[cartItemIndex].addEventListener('click', (item) => {
            item.preventDefault();
            let childToRemove = cartItemList[cartItemIndex];

            productsCart.removeChild(childToRemove);
            cartList.splice(cartList.indexOf(childToRemove.getAttribute('data-id')), 1);
            
            if(cartList.length == 0){
                cartContainer.style.display = 'none';
            }
        })
    })
}

productsList.forEach((item) => {
    setControlsListners(item);
    setAddDeleteFromCart(item);
});