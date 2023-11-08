# Tic-Tac-Toe Game in JavaScript

This is a simple implementation of a tic-tac-toe game in JavaScript. Players can take turns to make their moves, and the game will determine if there's a winner, loss or a draw.


This game can only be played with another person, it is a 2 player game.

## How to Use

1. Click on the empty boxes to make your moves.
2. X starts first followed by O.
3. If a player wins, their name will be shown as the winner.
4. If the game ends in a draw, it will be indicated.

# How To Create The Game Yourself With Explanations:

## The JavaScript Explanation :

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
## HTML Code Explanation :

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Nifemi Leye">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap" rel="stylesheet">
    <meta name="description" content="Nifemi Leye: Web Developer">
    <meta name="keywords" content="web developer, web, developer, front-end, html, css, javascript, react, sql">
    <title>Tic Tac Toe</title>
    <link rel="icon" href="./img/faviconratio.jpg" type="image/x-icon">
    <link rel="stylesheet" href="./assets/style/index.css" media="all">
    <link rel="stylesheet" href="./assets/style/reset.css" media="all">
    <script src="./assets/script/index.js" defer></script>
</head>
<body>
    <!-- This section contains the main content of the web page -->
    <div class="container">
        <!-- Heading for the page -->
        <h1 id="playerText">Tic Tac Toe</h1>

        <!-- A button for restarting the game -->
        <button id="restartButton">Restart</button>

        <!-- This div contains the game board with individual boxes -->
        <div id="gameboard">
            <!-- Individual box elements for the Tic Tac Toe game -->
            <div class="box" id="0"></div>
            <div class="box" id="1"></div>
            <div class "box" id="2"></div>
            <div class="box" id="3"></div>
            <div class="box" id="4"></div>
            <div class="box" id="5"></div>
            <div class="box" id="6"></div>
            <div class="box" id="7"></div>
            <div class="box" id="8"></div>
        </div>
    </div>
</body>
</html>
```
### For a quick preview of the game click [here](https://nnifemi.github.io/tic-tac-toe/)


