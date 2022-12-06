const btns = document.querySelectorAll('.btn');
let counter = document.getElementById('counter');

let number = 0;

btns.forEach((btn) => btn.addEventListener('click', () => {
    if (btn.id === 'decrease') {
        number -= 1;
    }

    if (btn.id === 'reset') {
        number = 0;
    }

    if (btn.id === 'increase') {
        number += 1;
    }
    counter.textContent = number;
    
    if (number > 0) {
        counter.style.color = 'green';
    }

    if (number === 0 ) {
        counter.style.color = '#0e2a43';
    }

    if (number < 0) {
        counter.style.color = 'red';
    }
}))