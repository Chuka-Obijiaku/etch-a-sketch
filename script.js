// generate the grid of divs 16 x 16

function generateGrid (gridDimension) {
    let gridContainer = document.getElementById("grid-container");
    for (let i = 0; i < gridDimension; i++) {
        let row = document.createElement("div");
        row.id = "row";
        for (let j = 0; j < gridDimension; j++) {
            let cell = document.createElement("div");
            cell.id = "grid-square";
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);

    }
}

generateGrid(16);
// be carefull of margins and padding
// setup a hover effect so grid divs change color 
// add a button to the page that asks the number of square to generate 