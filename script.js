// generate the grid of divs 16 x 16

let color = "#141414";
const white = "#FFFFFF";
let boardSize = 16;
let drawMode = false; // only draw if this is true 
// let colorPicker = document.getElementById("colorPicker");
// colorPicker.addEventListener("onchange", () => {

// })




function generateBoard (size) {
    
    
    let board = document.getElementById("board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size**2; i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', ()=> {
            if (drawMode) {
                if (color === 'random') {
                    cell.style.backgroundColor = randomColor();
                } else {
                    cell.style.backgroundColor = color;

                }

            }
        });
        cell.id = 'cell';
        cell.style.backgroundColor = white;
        board.insertAdjacentElement("beforeend", cell)

       
    }
    return
}


 
generateBoard(boardSize);

function changeSize(input) {
    boardSize = input;
    generateBoard(boardSize);
}

function changeColor(newColor) {
    
    color = newColor;
}

function toggleDraw() {
    if (drawMode) {
        drawMode = false;
    }
    else {
        drawMode = true;
    }
}

function clearBoard() {
    generateBoard(boardSize);
}

function randomColor() {

    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

// be carefull of margins and padding
// setup a hover effect so grid divs change color 
// add a button to the page that asks the number of square to generate 