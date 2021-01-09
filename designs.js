// variables declarations
const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const grid = document.getElementById("pixel_canvas");

// add event listener for grid size
sizePicker.addEventListener('submit', function (e) {
  // prevent page refresh on submit
  e.preventDefault();

  // get input and draw the grid
  let width = document.getElementById("input_width").value;
  let height = document.getElementById("input_height").value;
  makeGrid(width, height);
})

// function to draw the grid
function makeGrid(width, height) {
  grid.innerHTML = '';
  for (let x = 0; x < width; x++) {
    let row = grid.insertRow(x);
    for (let y = 0; y < height; y++) {
      // add new cell with listener to change color
      let cell = row.insertCell(y);
      cell.onclick = colorChange;

      //remove the existing color with double click
      cell.addEventListener("dblclick", function (event) {
        cell.style.backgroundColor = "";
      });
    }
  }
}

// change the color of the clicked cell to current color
function colorChange() {
  this.style.background = colorPicker.value;
}

