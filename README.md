# Tic-Tac-Toe Game in JavaScript

This is a basic implementation of a tic-tac-toe game in JavaScript. Players can take turns to make their moves, and the game will determine if there's a winner or a draw.

## How to Use

1. Open the `index.html` file in your web browser to play the game.
2. Click on the empty boxes to make your moves.
3. The game will display the current player's turn.
4. If a player wins, their name will be shown as the winner.
5. If the game ends in a draw, it will be indicated.

## Code Explanation

### HTML Structure

The game's HTML structure consists of a game board with nine boxes where players can make their moves. There is a player's turn indicator and a "Restart" button.

### JavaScript Code

- `playerText`: A variable to store the DOM element for displaying the current player's turn.
- `restartButton`: A variable to store the DOM element for the "Restart" button.
- `boxes`: An array to store the DOM elements for the game board boxes.
- `winnerIndicator`: A variable to store the CSS style for indicating winning blocks.

#### Players and Spaces

- `O_Player` and `X_Player`: Constants to represent the players.
- `currentPlayer`: Variable to keep track of the current player.
- `spaces`: An array to keep track of the game board's state, indicating which player's symbol occupies each box.

## How to Run
- `startGame()`: Function to initialize the game and set up click event listeners on the boxes.
- `boxClicked(e)`: Function to handle a player's move when a box is clicked. It updates the game board, checks for a win or a draw, and updates the current player's turn.
- `winningCombos`: An array that defines all possible winning combinations on the game board.
- `playerHasWon()`: Function to check if a player has won by comparing the board state with the winning combinations.
- `restart()`: Function to restart the game by clearing the board and resetting the player's turn.


Enjoy the game and have fun!
