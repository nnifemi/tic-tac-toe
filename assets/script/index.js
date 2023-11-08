'use strict';

let playerText = document.getElementById('playerText')
let restartButton = document.getElementById('restartButton')
let boxes = Array.from(document.getElementsByClassName('box'))
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')


const O_Player = "O"
const X_Player = "X"
let currentPlayer = X_Player
let  spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won`;
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor = winnerIndicator);
    } else if (isDraw()) {
      playerText.innerHTML = "It's a draw";
    } else {
      currentPlayer = currentPlayer === X_Player ? O_Player : X_Player;
    }
  }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function isDraw() {
  return spaces.every((space) => space !== null) && !playerHasWon();
}

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false;
}

restartButton.addEventListener('click', restart)

function restart() {
    spaces.fill(null)
    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'

    currentPlayer = X_Player
}
startGame()
