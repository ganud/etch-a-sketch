// Create 16 divs using loops?
// Flexbox the divs into a square grid
const container = document.getElementsByClassName("container")[0];

for(let i=0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add("square");
    container.appendChild(square);

}