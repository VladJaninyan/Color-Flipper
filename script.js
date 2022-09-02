let btn = document.querySelector('button'),
    span = document.querySelector('span'),
    bg  = document.querySelector('.bg'),
    rgb = document.querySelector('.rgb'),
    hex = document.querySelector('.hex');

let hexElementClicked = false,
    rgbElementClicked = false;

if(hexElementClicked === false && rgbElementClicked === false)  {
    btn.addEventListener('click', (e) => {
        let randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
        span.textContent = `#${randomHexColor}`;
        bg.style.backgroundColor = `#${randomHexColor}`;    
        });
}

rgb.addEventListener('click', (e) => {
    hexElementClicked = false;
    rgbElementClicked = true;
    if(rgbElementClicked) {
        btn.addEventListener('click', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let rgb = `rgb(${r},${g},${b})`;
            span.textContent = `${rgb}`;
            bg.style.backgroundColor = `${rgb}`;
        });
    }
});

hex.addEventListener('click', (e) => {
    hexElementClicked = true;
    rgbElementClicked = false;
    if(hexElementClicked) {
        btn.addEventListener('click', (e) => {
        let randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
        span.textContent = `#${randomHexColor}`;
        bg.style.backgroundColor = `#${randomHexColor}`;    
        });
    }
});




