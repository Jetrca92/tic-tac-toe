// Create grid elements
const grid = document.querySelector('.grid');
for (let i = 0; i < 9; i++) {
    const element = document.createElement('div');
    element.setAttribute('class', 'element');
    element.setAttribute('id', `el${i+1}`);
    grid.appendChild(element);
}

const Player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    };
    return { getSign };
};
const gameBoard = ["", "", "", "", "", "", "", "", ""];

const elements = document.querySelectorAll('.element');
elements.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('player-text')
        element.innerHTML = "X";
    })
})
