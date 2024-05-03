const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const defaultBtn = document.querySelector('#defaultBtn');
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

                modeSelect(content);
            }
    }
    editPad();
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

function modeSelect(content) {
    defaultBtn.addEventListener('click', () => {
        defaultMode(content);
    });
    rainbowBtn.addEventListener('click', () => {
        rainbowMode(content);
    });
}

function defaultMode(content) {
    content.addEventListener("mouseover", (event) => {
        content.style.backgroundColor = "black";
    });
}

function rainbowMode(content) {
    content.addEventListener("mouseover", (event) => {
        content.style.backgroundColor = `rgb(${randomizer()}, ${randomizer()}, ${randomizer()})`;
    });
}

function randomizer() {
    let randColor = Math.ceil(Math.random() * 255);
    return randColor;
}



createPad(defaultGridSize);
