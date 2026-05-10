let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function play(cell, index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;

    // Add styling class
    cell.classList.add(currentPlayer === "X" ? "x" : "o");

    if (checkWinner()) {
        document.getElementById("status").innerText =
            "Player " + currentPlayer + " Wins!";
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        document.getElementById("status").innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").innerText =
        "Player " + currentPlayer + " Turn";
}

function checkWinner() {
    return winPatterns.some(pattern => {
        let [a,b,c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function reset() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;

    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerText = "";
        cell.classList.remove("x", "o");
    });

    document.getElementById("status").innerText = "Player X Turn";
}