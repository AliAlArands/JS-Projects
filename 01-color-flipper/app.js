const colors = ['Red', 'Rgba(133,122,200)', 'Green','#F15025']

const color = document.querySelector('.color');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()* colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
    btn.style.backgroundColor = colors[randomColor]
});

