const canvasContainer = document.querySelector('#canvas-container');

const layer = document.querySelector('#layer');


function createRow (gridSize) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    for (let i=0; i<gridSize; i++) {
        const addRow = document.createElement('div');
        addRow.classList = ('row-div')
        addRow.setAttribute('style', 'display: flex; border: 1px solid black; width: 40px; height: 40px')
        newRow.appendChild(addRow);
    }
    layer.appendChild(newRow);
}

createRow(16);

function createLayer(gridSize) {
    for (let z=0; z<gridSize; z++) {
        createRow(16);
    }
}

createLayer(16);