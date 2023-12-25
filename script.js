const canvasContainer = document.querySelector('#canvas-container');

function insertCells(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        const insertCells = document.createElement('div');
        insertCells.className = 'cells';
        canvasContainer.appendChild(insertCells);
    }
}

let inputValue;

let userGridButton = document.querySelector("#submit");

userGridButton.addEventListener("click", () => {
    canvasContainer.textContent = "";
    gridPressed();
    numDivs();
    cellCalculation();
    setStyle(cellCalc);
})

function gridPressed() {
    let userInput = document.getElementById("number");
    console.log(userInput.value)
    if (userInput.value >= 2 && userInput.value <= 50) {
        console.log('value is in the right range');
        inputValue = userInput.value;
        return inputValue;
    }  else {
        alert('Please choose a grid size between 2 and 50');
    }
}

let numDivs2;

function numDivs() {
    let numDivs = inputValue * inputValue;
    console.log(numDivs);
    insertCells(numDivs, cellCalc);
    numDivs2 = numDivs;
 }

let cellCalc;
 
function cellCalculation() {
    cellCalc = inputValue / numDivs2;
    cellCalc = cellCalc * 100;
    console.log('cell calc is: ' +  cellCalc);
    return cellCalc;
}

function setStyle(cellCalc) {
    const cells = document.querySelectorAll('.cells')

    cells.forEach(cell => {
        cell.style.flex = `1 0 calc(${cellCalc}%)`;
    });
}

function defaultGrid() {
    insertCells(256);
    const cells = document.querySelectorAll('.cells')
    cells.forEach(cell => {
        cell.style.flex = "1 0 calc(6.25%)";
    });
}

defaultGrid();