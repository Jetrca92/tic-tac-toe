# Tic Tac Toe
This is a simple browser-based tic tac toe game built with vanilla JavaScript, HTML, and CSS.

## Preview
[Click here](https://jetrca92.github.io/tic-tac-toe/) to play the game.

## Game rules
- When the game starts, player X goes first.
- Click on an empty square to make a move.
- The game alternates between X and O until one player wins or the game ends in a tie.
- The game ends when one player gets three in a row horizontally, vertically, or diagonally, or if all squares are filled without either player achieving three in a row.

## Code explanation
The game consists of a 3x3 grid of HTML div elements, each with an id attribute ranging from 0 to 8. When a player clicks on a square, an event listener triggers a JavaScript function that marks the square with an X or O depending on whose turn it is. The game board is stored as an array, with each element representing a square on the board. The win conditions are also stored as an array of arrays, with each inner array representing a possible winning combination of squares.

The checkWinner function loops through the game board and compares each player's conditions with the win conditions to determine if a player has won or if the game has ended in a tie.

The game UI is styled using CSS, with a simple header and a centered game board. The player's turn is indicated with a text element that updates after each move.