const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

// Function to create the grid
function createGrid(size) {
  // Clear existing grid
  container.innerHTML = "";

  // Set grid size dynamically
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover effect: Change background color
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = randomColor();
    });

    container.appendChild(square);
  }
}

// Function to generate random color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Reset button functionality
resetButton.addEventListener("click", () => {
  let size = parseInt(prompt("Enter grid size (maximum 100):", 16));
  if (size > 100) {
    alert("Size too large! Setting to 100.");
    size = 100;
  } else if (size < 1 || isNaN(size)) {
    alert("Invalid size! Setting to default (16).");
    size = 16;
  }
  createGrid(size);
});

// Initial grid setup
createGrid(16);
