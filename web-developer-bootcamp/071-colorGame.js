const colors = generateRandomColors(6);

const squares = document.querySelectorAll('.square');
const pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  // use style.backgroundColor. It's compatible with more browsers.
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener('click', function() {
    // grab color of picked square
    const clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'CORRECT!';
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change each square color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  const arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a "red" from 0-255
  const r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  const g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
