// Create grid elements
const grid = document.querySelector('.grid');
for (let i = 0; i < 9; i++) {
    const element = document.createElement('div');
    element.setAttribute('class', 'element');
    element.setAttribute('id', `${i}`);
    grid.appendChild(element);
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const gameBoard = ["", "", "", "", "", "", "", "", ""];
let roundCount = 0;

function checkWinConditions(playerConditions, winConditions) {
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (playerConditions.includes(a) && playerConditions.includes(b) && playerConditions.includes(c)) {
            return true; // player has a win condition
        }
    }
    return false; // player does not have any win conditions
}

// Loops and compares player conditions and win conditions
const checkWinner = (gameBoard) => {
    const playerXConditions = [];
    const playerOConditions = [];
    for (let i = 0; i < 9; i++) {
        if (gameBoard[i] === "X") {
            playerXConditions.push(i);
        }
        if (gameBoard[i] === "O") {
            playerOConditions.push(i);
        }
    }
    
    if (checkWinConditions(playerXConditions, winConditions)) {
        return "Player X has won!";
    }
    if (checkWinConditions(playerOConditions, winConditions)) {
        return "Player O has won!";
    }
    return "It's a draw!";
    
};

// Add event listener for each element of the grid
const elements = document.querySelectorAll('.element');
elements.forEach((element) => {
    element.addEventListener('click', () => {
        const playerText = document.querySelector('.player-text').innerHTML;
        let log = checkWinner(gameBoard);
        if (playerText === "Player X's turn") {
            // Check if spot free
            if (gameBoard[element.id] === "") {
                roundCount += 1
                element.innerHTML = "X";
                gameBoard[element.id] = "X";
                log = checkWinner(gameBoard);
                if ((log === "Player X has won!") || (log === "Player O has won!")) {
                    document.querySelector('.player-text').innerHTML = log; 
                }
                else if ((log === "It's a draw!") && (roundCount === 9)) {
                    document.querySelector('.player-text').innerHTML = log;
                }
                else {
                    document.querySelector('.player-text').innerHTML = "Player O's turn"    
                }
            }
        }
        if (playerText === "Player O's turn") {
            // Check if spot free
            if (gameBoard[element.id] === "") {
                roundCount += 1
                element.innerHTML = "O";
                gameBoard[element.id] = "O";
                log = checkWinner(gameBoard);
                if ((log === "Player X has won!") || (log === "Player O has won!")) {
                    document.querySelector('.player-text').innerHTML = log;
                }
                else if ((log === "It's a draw!") && (roundCount === 9)) {
                    document.querySelector('.player-text').innerHTML = log; 
                }
                else {
                    document.querySelector('.player-text').innerHTML = "Player X's turn"
                } 
            }
        }
    })
})

