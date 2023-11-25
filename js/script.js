const boardSize = 480;
const board = document.querySelector('.board');

window.addEventListener('load', setGrid(16));

function setGrid(gridSize) {
    const blockSize = boardSize / gridSize;
    console.log(blockSize);
    for (let i = 0; i < gridSize ** 2; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.width = blockSize + 'px';
        block.style.height = blockSize + 'px';
        board.appendChild(block);
    }
}