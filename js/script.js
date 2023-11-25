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
    let style = window.getComputedStyle(ceil.target);
    let bgColor = style.backgroundColor;
    if (bgColor == 'rgb(255, 255, 255)') {
        ceil.target.style.backgroundColor = pickRandomColor();
    } else {
        ceil.target.style.backgroundColor = darkenColor(bgColor);
    }
    ceil.target.style.border = 'none';
}

function pickRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function darkenColor(color) {
    const regEx = /rgb\((\d+), (\d+), (\d+)\)/;
    const rgb = color.match(regEx);
    let [,r, g, b] = rgb;

    r = Math.round(r - r * 0.1);
    g = Math.round(g - g * 0.1);
    b = Math.round(b - b * 0.1);

    return `rgb(${r},${g},${b})`;
}

function setGridSizeMenu() {
    let condition = document.querySelector('#submit');
    
    if (!condition) {
        const body = document.querySelector('body');
        const main = document.querySelector('main');
        const gridSizeMenu = document.createElement('div');
        const container = document.createElement('div');

        gridSizeMenu.classList.add('grid-size-menu');
        container.classList.add('container');

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('min', '16');
        input.setAttribute('max', '100');
        input.id = 'ceils-per-side';
        input.setAttribute('placeholder', 'Enter a number between 16 and 100');

        const submit = document.createElement('button');
        submit.textContent = 'Submit';
        submit.id = 'submit';

        container.appendChild(input);
        container.appendChild(submit);
        gridSizeMenu.appendChild(container);

        body.insertBefore(gridSizeMenu, main);

        submit.addEventListener('click', setNewGrid);
    }
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