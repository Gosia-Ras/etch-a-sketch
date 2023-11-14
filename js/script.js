const container = document.querySelector(".gridContainer");
const newGridButton = document.querySelector(".newGrid");

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "item";
    gridItem.id = i + 1;

    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = "pink";
    });

    container.appendChild(gridItem);
  }

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

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
