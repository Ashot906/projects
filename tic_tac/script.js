const board = document.getElementById('board');
const winnerText = document.getElementById('winner');
let currentPlayer = 'X';
let gameBoard = Array(9).fill(null);

function createBoard(){
    board.innerHtml = "";
    gameBoard.forEach((n, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = index;
        cell.addEventListener("click", handleClick, { once: true});
        board.appendChild(cell);
    })
}

function handleClick(event){
    const index = event.target.dataset.index;
    if(!gameBoard[index]){
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.classList.add("taken");
        if(checkWinner()){
            winnerText.textContent = `${currentPlayer} Wins`;
        }
        if(currentPlayer === "X"){
            currentPlayer = "O"
        }else if(currentPlayer === "O"){
            currentPlayer = "X"
        }
    }
}

function checkWinner(){
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
   return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] 
        && gameBoard[a] === gameBoard[c];
    })
}

function resetGame() {
    gameBoard.fill(null);
    currentPlayer = 'X';
    winnerText.textContent = "";

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove('taken');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
}


createBoard();