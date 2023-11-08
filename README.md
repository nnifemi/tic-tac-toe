# Tic-Tac-Toe Game in JavaScript

This is a simple implementation of a tic-tac-toe game in JavaScript. Players can take turns to make their moves, and the game will determine if there's a winner, loss or a draw.

## How to Use

1. Click on the empty boxes to make your moves.
2. X starts first followed by O.
3. If a player wins, their name will be shown as the winner.
4. If the game ends in a draw, it will be indicated.

## The JavaScript Explanation

```javascript
// Use strict to write cleaner code and catch errors or bugs
'use strict';

// These are the variables for game elements
let playerText = document.getElementById('playerText');
let restartButton = document.getElementById('restartButton');
let boxes = Array.from(document.getElementsByClassName('box'));
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

// These are the constants for player symbols
const O_Player = "O";
const X_Player = "X";

// Once the game starts the current player and game board
let currentPlayer = X_Player;
let spaces = Array(9).fill(null);

// This is the function to start the game
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

// This is the function to handle a player's move
function boxClicked(e) {
    const id = e.target.id;

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if (playerHasWon() !== false) {
            playerText.innerHTML = `${currentPlayer} has won`;
            let winning_blocks = playerHasWon();

            winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator);
            return;
        }

        currentPlayer = currentPlayer === X_Player ? O_Player : X_Player;
    }
}

// The Possible winning combinations
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// This is the function to check if a draw occured
function isDraw() {
  return spaces.every((space) => space !== null) && !playerHasWon();
}

// This is the function to check if a player has won
function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition;

        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c];
        }
    }
    return false;
}

// The restart button function for the game
restartButton.addEventListener('click', restart);

function restart() {
    spaces.fill(null);
    boxes.forEach(box => {
        box.innerText = '';
        box.style.backgroundColor = '';
    })

    playerText.innerHTML = 'Tic Tac Toe';

    currentPlayer = X_Player;
}

// Function to start the game
startGame();
```

