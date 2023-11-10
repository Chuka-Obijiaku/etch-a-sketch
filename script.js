// generate the grid of divs 16 x 16

let drawColor = "#141414";
const white = "#FFFFFF";


function generateBoard (size) {
    
    
    let board = document.getElementById("board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size**2; i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', ()=> {
            
            cell.style.backgroundColor = drawColor;
        });
        cell.id = 'cell';
        cell.style.backgroundColor = white;
        board.insertAdjacentElement("beforeend", cell)

       
    }
    return
}


 
generateBoard(16);

function changeSize(input) {
    generateBoard(input);
}

function changeColor(color) {
    drawColor = color;
}
// be carefull of margins and padding
// setup a hover effect so grid divs change color 
// add a button to the page that asks the number of square to generate 