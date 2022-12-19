const closeButton = document.querySelector('.close');
const sideBar = document.querySelector('.sidebar');
const navToggle = document.querySelector('.nav-toggle');

closeButton.addEventListener('click', () => {
    sideBar.classList.remove('show-sidebar');
} );

navToggle.addEventListener('click', () => {
    sideBar.classList.toggle('show-sidebar')
});
