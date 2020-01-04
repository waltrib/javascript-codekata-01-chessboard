let size = parseInt(process.argv.slice(2));
const chessboard = (boardsize) => {
let whitesqr = " ";
let blacksqr = "#";
let newline = "\n";
let board = "";
let toggle = true;
for (let y = 1 ; y <= boardsize ; y++){
if (y % 2 === 0){toggle = false;} else {toggle = true;}
for (let x = 1; x <= boardsize; x++){
if (toggle == true){
board = board + whitesqr;
toggle = false;
} else {
board = board + blacksqr;
toggle = true;
}
}
board = board + newline;
}
console.log(board);
}

chessboard(34);


// in terminal = node chessboard.js 7