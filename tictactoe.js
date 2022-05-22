var board;
var playerx = 'X';
var playero = 'O';
var currentplayer = playerx;
var gameover = false;
var winner;
var x = 0;


window.onload = function() {
    start();
}

function start() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = r.toString() + '-' + c.toString();

            if (r == 0 || r == 1) {
                cell.classList.add("hl");
            }
            if (c == 0 || c == 1) {
                cell.classList.add("vl");
            }
            cell.innerText = " ";
            cell.addEventListener("click", click);
            document.getElementById("board").appendChild(cell);
        }
    }
}

function click() {
    if (gameover) {
        return;
    }
    let cords = this.id.split("-");
    let r = parseInt(cords[0]);
    let c = parseInt(cords[1]);

    if (board[r][c] != ' ') {
        return;
    }
    board[r][c] = currentplayer;
    this.innerText = currentplayer;

    if (currentplayer == playero) {
        x++;
        currentplayer = playerx;
    } else {
        x++;
        currentplayer = playero;
    }
    if (x == 9) {
        draw();
    }
    check();
}

function check() {

    for (var c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[1][c] != " ") {
            winner = currentplayer;
            for (let j = 0; j < 3; j++) {
                let cell = document.getElementById(j.toString() + "-" + c.toString());
                cell.classList.add("winner");
            }
            gameover = true;

        }
    }
    for (var r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][1] != " ") {
            winner = currentplayer;
            for (let i = 0; i < 3; i++) {
                let cell = document.getElementById(r.toString() + "-" + i.toString());
                cell.classList.add("winner");
            }
            gameover = true;

        }
    }
    if (board[1][1] == board[2][2] && board[0][0] == board[1][1] && board[1][1] != " ") {
        winner = currentplayer;
        for (let i = 0; i < 3; i++) {
            let cell = document.getElementById(i.toString() + "-" + i.toString());
            cell.classList.add("winner");
        }
        gameover = true;

    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] != " ") {
        winner = currentplayer;
        for (let i = 0, j = 2; i < 3; i++, j--) {
            let cell = document.getElementById(i.toString() + "-" + j.toString());
            cell.classList.add("winner");
        }
        gameover = true;

    }
    if (gameover) {
        over();
    }
}

function over() {
    if (currentplayer == playero) {
        currentplayer = playerx;
    } else {
        currentplayer = playero;
    }
    document.getElementById("back").classList.add("win");
    document.getElementById("but").classList.add("win");
    document.getElementById("player").innerHTML = "Player   " + currentplayer + "   Wins";
}

function draw() {
    document.getElementById("back").classList.add("win");
    document.getElementById("but").classList.add("win");
    document.getElementById("player").innerHTML = "Its a draw";
}