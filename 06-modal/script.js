const openBtn = document.querySelector('.btn');
console.log(openBtn)

const modal = document.querySelector('.modal');
console.log(modal);

const closeBtn = document.querySelector('.close-btn');
console.log(closeBtn);


openBtn.addEventListener('click', () => {
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal');
});