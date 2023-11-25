const boardSize = 480;
const board = document.querySelector('.board');

window.addEventListener('load', setGrid(16));

board.addEventListener('mouseover', e => {
    changeCeilColor(e);
});

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

function changeCeilColor(ceil) {
    ceil.target.style.backgroundColor = 'black';
    ceil.target.style.border = 'none';
}