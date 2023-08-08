// Create 16 divs using loops?
// Flexbox the divs into a square grid
const container = document.getElementsByClassName("container")[0];

// Create a 16x16 grid
for(let j=0; j <16; j++){
    const line = document.createElement('div');
    line.classList.add("line");
    for(let i=0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        line.appendChild(square);
    }
    container.appendChild(line);
}