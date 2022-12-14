const btn = document.querySelector('.nav-toggle');
console.log(btn);

const links = document.querySelector('.links');
console.log(links);

btn.addEventListener('click', () => {
    links.classList.toggle('show-links');
});