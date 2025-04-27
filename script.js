//global variables
let colorMode = 'black';



//initialize buttons
const resizeButton = document.querySelector('.resize')
const clearButton = document.querySelector('.clear')
const blackButton = document.querySelector('.black')
const rgbButton = document.querySelector('.rgb')

//button event listners
resizeButton.addEventListener('click', resizeGrid);

clearButton.addEventListener('click', clearGrid);


blackButton.addEventListener('click', () => {
  colorMode = 'black';
});

rgbButton.addEventListener('click', () => {
  colorMode = 'rgb';
});





//generate the grid
function createGrid() {
  
const grid =  document.querySelector('.grid');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  grid.appendChild(square); }


  }


//draw black on grid
function enableDrawing() {
  const squares = document.querySelectorAll('.square'); // select all squares

  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black'; // Draw black when hovering
    });
  });
}


//get random colour
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // random number 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//drawing on the grid
function enableDrawing() {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      if (colorMode === 'black') {
        square.style.backgroundColor = 'black';
      } else if (colorMode === 'rgb') {
        square.style.backgroundColor = getRandomColor();
      }
    });
  });
}

//clear the grid
function clearGrid(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    clearGrid();
}


//resize the grid
function resizeGrid() {
  let newSize = prompt("Enter new grid size (max 100):");

  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
    }};


//start functions
createGrid();
enableDrawing();