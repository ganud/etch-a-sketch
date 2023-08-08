// Create 16 divs using loops?
// Flexbox the divs into a square grid
// Add mousedown event listener to each square
function createGrid(size) {
    for(let j=0; j <size; j++){
        const line = document.createElement('div');
        line.classList.add("line");
        for(let i=0; i < size; i++) {
            const square = document.createElement('div');
            square.classList.add("square");
            square.addEventListener("mouseover", function(e) {
                if(e.buttons === 1) {
                    square.classList.add("changed");
                }
            })
            line.appendChild(square);
        }
        container.appendChild(line);
    }
}
const container = document.getElementsByClassName("container")[0];

// Create a 16x16 grid
createGrid(24)