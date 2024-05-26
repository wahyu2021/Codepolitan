const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset-button')
const winPointOption = document.querySelector('#win-point')

let p1Score = 0;
let p2Score = 0;
let winPoint = 5;
let isGameOver = false;

// reset function
const reset = () => {
    isGameOver = false;
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
}

p1Button.addEventListener('click', () => {
    if(!isGameOver){
        p1Score += 1;
        p1Display.textContent = p1Score;
        if(p1Score === winPoint){
            isGameOver = true;
        }
    }
})

p2Button.addEventListener('click', () => {
    if(!isGameOver){
        p2Score += 1;
        p2Display.textContent = p2Score;
        if(p2Score === winPoint){
            isGameOver = true;
        }
    }
})

resetButton.addEventListener('click', reset)

winPointOption.addEventListener('change', () => {
    winPoint = parseInt(winPointOption.value);
    reset();
})