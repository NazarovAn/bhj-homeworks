'use strict';

const book = document.getElementById('book'),      
      bookContent = book.querySelector('.book__content'),
      fontSizeControls = book.querySelector('.book__control_font-size'),
      fontSizeItems = fontSizeControls.querySelectorAll('.font-size'),
      fontColorControls = book.querySelector('.book__control_color'),
      fontColorItems = fontColorControls.querySelectorAll('.color'),
      backgroundColorControls = book.querySelector('.book__control_background'),
      backgroundColorItems = backgroundColorControls.querySelectorAll('.color');

let size, fontColor, backgroundColor;

for (let i = 0; i < fontSizeItems.length; i++) {
    fontSizeItems[i].addEventListener('click', (e) => {
        e.preventDefault();
        
        let activeFont = fontSizeControls.querySelector('.font-size_active');
        activeFont.classList.remove('font-size_active');

        fontSizeItems[i].classList.add('font-size_active');   
        
        bookContent.classList.remove(`book_fs-${size}`);

        size = fontSizeItems[i].getAttribute('data-size');

        if (size === null) {return};

        bookContent.classList.add(`book_fs-${size}`);      
    });
}

for (let i = 0; i < backgroundColorItems.length; i++) {
    backgroundColorItems[i].addEventListener('click', (e) => {
        e.preventDefault();
        
        let activeBGColor = backgroundColorControls.querySelector('.color_active');
        activeBGColor.classList.remove('color_active');

        backgroundColorItems[i].classList.add('color_active');   
        
        bookContent.classList.remove(`color_${backgroundColor}`);

        backgroundColor = backgroundColorItems[i].getAttribute('data-color');

        if (backgroundColor === null) {return};

        bookContent.classList.add(`color_${backgroundColor}`);
    });
}

for (let i = 0; i < fontColorItems.length; i++) {
    fontColorItems[i].addEventListener('click', (e) => {
        e.preventDefault();
        
        let activeFColor = fontColorControls.querySelector('.color_active');
        activeFColor.classList.remove('color_active');

        fontColorItems[i].classList.add('color_active');   
        
        bookContent.classList.remove(`book_bg-${fontColor}`);

        fontColor = fontColorItems[i].getAttribute('data-color');

        if (fontColor === null) {return};

        bookContent.classList.add(`book_bg-${fontColor}`);
    });
}
    
      











//       booksFontSizeControls = book.querySelectorAll('.font-size');

// let size;

// for (let i = 0; i < booksFontSizeControls.length; i++) {
//     booksFontSizeControls[i].addEventListener('click', (e) => {
//         e.preventDefault();
        
//         let activeFont = booksFontSizeControls[i].parentElement.querySelector('.font-size_active');
//         activeFont.classList.remove('font-size_active');

//         booksFontSizeControls[i].classList.add('font-size_active');   
        
//         bookContent.classList.remove(`book_fs-${size}`);

//         size = booksFontSizeControls[i].getAttribute('data-size');

//         if (size === null) {return}

//         bookContent.classList.add(`book_fs-${size}`);      
//     });
// }