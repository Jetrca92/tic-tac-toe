// Create grid elements
const grid = document.querySelector('.grid');
for (let i = 0; i < 9; i++) {
    const element = document.createElement('div');
    element.setAttribute('class', 'element');
    element.setAttribute('id', `el${i+1}`);
    grid.appendChild(element);
}

const elements = document.querySelectorAll('.element');
elements.forEach((element) => {
    element.addEventListener('click', () => {
        element.innerHTML = "X";
    })
})
