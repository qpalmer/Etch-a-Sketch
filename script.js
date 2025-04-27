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
function createGrid(size = 16) {
  const grid = document.querySelector('.grid');
  grid.innerHTML = ''; // Clear any previous grid

  // Calculate the size of each square based on the number of squares
  const squareSize = 100 / size; // Percentage size for each square

  // Create squares based on the grid size
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}%`; // Set width as percentage
    square.style.height = `${squareSize}%`; // Set height as percentage
    grid.appendChild(square);
  }}





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
function clearGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = ''; // Reset the color
  });
}





//resize the grid
function resizeGrid() {
  let newSize = prompt("Enter new grid size (max 100):");

  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
    }
    createGrid(newSize); // Re-create the grid with the new size
    enableDrawing();
  };





//start functions
createGrid();
enableDrawing();