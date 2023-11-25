const boardSize = 480;
const board = document.querySelector('.board');
const newGridButton = document.querySelector('button');

window.addEventListener('load', setGrid(16));

board.addEventListener('mouseover', e => {
    changeCeilColor(e);
});

newGridButton.addEventListener('click', setGridSizeMenu);

function setGrid(ceilsPerSide) {
    const ceilSize = boardSize / ceilsPerSide;
    const gridSize = ceilsPerSide ** 2;
    for (let i = 0; i < gridSize; i++) {
        const ceil = document.createElement('div');
        ceil.classList.add('ceil');
        ceil.style.width = ceilSize + 'px';
        ceil.style.height = ceilSize + 'px';
        board.appendChild(ceil);
    }
}

function clearGrid() {
    const ceils = document.querySelectorAll('.ceil');
    ceils.forEach(ceil => ceil.remove());
}

function changeCeilColor(ceil) {
    ceil.target.style.backgroundColor = 'black';
    ceil.target.style.border = 'none';
}

function setGridSizeMenu() {
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const gridSizeMenu = document.createElement('div');

    gridSizeMenu.classList.add('grid-size-menu');

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('min', '16');
    input.setAttribute('max', '100');
    input.id = 'ceils-per-side';

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.id = 'submit';

    gridSizeMenu.appendChild(input);
    gridSizeMenu.appendChild(submit);

    body.insertBefore(gridSizeMenu, main);

    submit.addEventListener('click', setNewGrid);
}

function setNewGrid() {
    const input = document.querySelector('#ceils-per-side');
    const gridSizeMenu = document.querySelector('.grid-size-menu');
    const ceilsPerSide = input.value;

    if (ceilsPerSide >= 16 && ceilsPerSide <= 100) {
        clearGrid();
        setGrid(ceilsPerSide);
        gridSizeMenu.remove();
    }
}