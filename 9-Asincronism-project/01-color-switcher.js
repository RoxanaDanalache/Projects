const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorInterval;

function getRandomHexColor() {
    return`#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function startChangingColor() {
    if (!colorInterval) {
            colorInterval = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
        },1000);
    }
}

function stopChangingColor() {
    clearInterval(colorInterval);
    colorInterval = null;
}

startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);