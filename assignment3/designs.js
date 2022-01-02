// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var table = document.getElementById("pixelCanvas");
var colorPick = document.getElementById("colorPicker");
var sizePick = document.getElementById("sizePicker");




function makeGrid(width, height) {
    table.innerHTML = '';
    for (let row = 0; row < width; row++) {
      let newRow = table.insertRow();
        for (let cell= 0; cell < height; cell++ ) {
          let newCell = newRow.insertCell();
          newCell.onclick = changeTheColor;
        }
    }
}

function changeTheColor() {
    this.style.background = colorPick.value;
}

sizePick.addEventListener('submit', function() {
    event.preventDefault();  
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth" ).value;
    makeGrid(width, height);
})

