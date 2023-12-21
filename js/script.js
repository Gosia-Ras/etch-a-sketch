const container = document.querySelector(".gridContainer");
const newGridButton = document.querySelector(".newGrid");
const colorPickerContainer = document.querySelector(".colorPicker");
const randomColor = document.querySelector("#random");

// Set the default color
let currentColor = "black";
let isRandomColor = false; // Flag to indicate if random color mode is active

function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "item";
    gridItem.id = i + 1;
    container.appendChild(gridItem);
  }
}

container.addEventListener(
  "mouseenter",
  (event) => {
    if (event.target.className === "item") {
      if (isRandomColor) {
        currentColor =
          "rgb(" +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          ")";
      }
      event.target.style.backgroundColor = currentColor;
    }
  },
  true
);

randomColor.addEventListener("click", () => {
  isRandomColor = true;
});

const colorArray = [
  "red",
  "blue",
  "orange",
  "yellow",
  "black",
  "white",
  "pink",
  "purple",
  "green",
];

colorArray.forEach((color) => {
  const colorButton = document.createElement("button");
  colorButton.style.backgroundColor = color;
  colorPickerContainer.appendChild(colorButton);

  colorButton.addEventListener("click", () => {
    currentColor = color;
    isRandomColor = false;
  });
});

function isValidGridSize(size) {
  return size && !isNaN(size) && size > 0 && size <= 100;
}

newGridButton.addEventListener("click", function () {
  let gridSize = prompt("Enter the number of squares per side (max: 100):");
  if (isValidGridSize(gridSize)) {
    createGrid(parseInt(gridSize));
  } else {
    alert("Invalid input. Please enter a number between 1 and 100.");
  }
});

// Initial grid creation
createGrid(16);
