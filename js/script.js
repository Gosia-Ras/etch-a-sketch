let container = document.querySelector(".gridContainer");

for (var i = 0; i < 16; i++) {
  let gridItem = document.createElement("div");
  gridItem.className = "item";
  gridItem.id = i + 1;
  container.appendChild(gridItem);

  gridItem.addEventListener("mouseover", (e) => {
    gridItem.style.backgroundColor = "pink";
  });
}
