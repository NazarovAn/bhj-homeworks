'use strict';

function restart() {
    dead.textContent = 0;
    lost.textContent = 0;
}

//Вариант 1
// document.onclick = (element) => {
//     if(element.target.className == "hole hole_has-mole"){
//         dead.textContent ++;
//         if (dead.textContent == 10) {
//             alert("Победа!");
//             restart();
//         }
//     } else if(element.target.className != "hole") {
//         return;
//     } else {
//         lost.textContent ++;
//         if (lost.textContent == 5) {
//             alert("Поражение");
//             restart();
//         }
//     }
// }


// function getHole(index) { 
//     return document.getElementById(`hole${index}`)
// }

for (let i = 1; i < 10; i++) {
    const hole = document.getElementById(`hole${i}`);
    // const hole = getHole(i);

    hole.onclick = () => {
        if (hole.classList.contains("hole_has-mole")) {            
            dead.textContent++;
            if (dead.textContent == 10) {
                alert("Победа!");
                restart()
            }            
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert("Поражение");
                restart()
            }
        }
    }    
}