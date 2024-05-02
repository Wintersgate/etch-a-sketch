const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
let grid = 16;

function createPad() {
    for (i = 0; i < grid * grid; i++) {
        const content = document.createElement('div');
        content.classList.add('content');

        container.appendChild(content);

        content.addEventListener("mouseover", (event) => {
            content.classList.add('color');
        });
    }
}

function editPad() {
    btn.addEventListener('click', () => {
        grid = prompt('Enter number of rows ');
    });
}

createPad();
editPad();