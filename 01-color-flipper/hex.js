let hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','f'];


const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    let hexNumber = '#'
    for (let i = 0; i<6; i++) {
        let randomNumber = Math.floor(Math.random()* hex.length);
        hexNumber += hex[randomNumber]; 
    }
    document.body.style.backgroundColor = hexNumber;
    color.textContent = hexNumber;
    btn.style.backgroundColor = hexNumber
});
