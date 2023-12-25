const canvasContainer = document.querySelector('#canvas-container');

//function to insert individual divs
function insertCells(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        const insertCells = document.createElement('div');
        insertCells.className = 'cells';
        canvasContainer.appendChild(insertCells);
    }
}

let inputValue;



// computes gridsize when submit is pressed

let userGridButton = document.querySelector("#submit");

userGridButton.addEventListener("click", () => {
    canvasContainer.textContent = "";
    gridPressed();
    numDivs();
    cellCalculation();
    setStyle(cellCalc);
})

let userInput;

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

// calculates the number of grids needing to be inserted based on user input
let numDivs2;

function numDivs() {
    let numDivs = inputValue * inputValue;
    console.log(numDivs);
    insertCells(numDivs, cellCalc);
    numDivs2 = numDivs;
 }

 // dynamic calculation of div flex styling
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

// default grid size for boot up
function defaultGrid() {
    insertCells(256);
    const cells = document.querySelectorAll('.cells')
    cells.forEach(cell => {
        cell.style.flex = "1 0 calc(6.25%)";
    });
}

defaultGrid();

// mouseover

let currentColor = 'black';

canvasContainer.addEventListener("mouseover", () => {
    const hoverCells = document.querySelectorAll('.cells');
    hoverCells.forEach(cells => {
        cells.addEventListener('mouseover', () => {
            if (currentColor === 'rainbow') {
                cells.style.backgroundColor = getRandomColor();
            } else {
                cells.style.backgroundColor = `${currentColor}`;
            }
        })
    })     
})

const blackButton = document.getElementById('btn-black');

blackButton.addEventListener('click', () => {
    currentColor = 'black';
    return currentColor;
})

const whiteButton = document.getElementById('btn-white');

whiteButton.addEventListener('click', () => {
    currentColor = 'white';
    return currentColor;
})

const rainbowButton = document.getElementById('btn-rainbow');
rainbowButton.addEventListener('click', () => {
    currentColor = 'rainbow';
});

function getRandomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}