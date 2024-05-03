const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
let defaultGridSize = 16;

function createPad(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        container.appendChild(row);

            for (o = 0; o < gridSize; o++) {
                const content = document.createElement('div');
                content.classList.add('content');

                row.appendChild(content);

                content.addEventListener("mouseover", (event) => {
                    content.classList.add('color');
                });
            }
    }
}

function editPad() {
    let newSize;
    btn.addEventListener('click', () => {
        newSize = prompt('Enter number of rows ', '16');

        while(container.firstChild) {
            container.removeChild(container.firstChild)
        }
        createPad(newSize);
    });
}

createPad(defaultGridSize);
editPad();