const btn = document.querySelector('.switch-btn');
const uiBtn = document.querySelector('.switch-btn .switch');
const video = document.querySelector('.video-container');

btn.addEventListener('click', () => {
    if(!uiBtn.classList.contains('slide')){ 
        uiBtn.classList.add('slide');
        video.pause();
    }

    else {
        uiBtn.classList.remove('slide');
        video.play();
    }
})



const photo = document.querySelector('.photo-container');

window.addEventListener('load', () => {
    photo.classList.add('photo-collapse');
})