import { UI } from "./ui.js";

const ui = new UI();

// const INITIAL_GRID_SIDE_LENGTH = 16;
// const GRID_SIZE = 550;

// const calculateCellSize = function (gridSideLength, gridSize) {
//   return Math.round(gridSize / gridSideLength);
// };

// const createGridCSSText = function (initialGridSideLength, initialGridSize) {
//   const cellSize = calculateCellSize(initialGridSideLength, initialGridSize);
//   const gridSize = initialGridSideLength * cellSize;
//   const cssText = `height: ${gridSize}px;
//                 width: ${gridSize}px;
//                 grid-template-columns: repeat(${initialGridSideLength}, ${cellSize}px);
//                 grid-template-rows: repeat(${initialGridSideLength}, ${cellSize}px);`;
//   console.log(cssText);
//   return cssText;
// };

// const createGrid = function (gridSideLength) {
//   const gridFragment = document.createDocumentFragment();
//   for (let row = 0; row < gridSideLength; row++) {
//     for (let column = 0; column < gridSideLength; column++) {
//       const cell = document.createElement("div");
//       cell.setAttribute("class", "grid-cell");
//       cell.setAttribute("data-row", row);
//       cell.setAttribute("data-column", column);
//       cell.style.gridRow = `${row + 1} / span 1`;
//       cell.style.gridColumn = `${column + 1} / span 1`;
//       cell.addEventListener("mouseenter", (event) => {
//         event.target.classList.add("grid-cell--marked");
//       });
//       gridFragment.appendChild(cell);
//     }
//   }
//   return gridFragment;
// };

// const clearGrid = function () {};

// const grid = document.getElementById("grid");
// grid.style.cssText = createGridCSSText(INITIAL_GRID_SIDE_LENGTH, GRID_SIZE);
// grid.appendChild(createGrid(INITIAL_GRID_SIDE_LENGTH));

// const clearButton = document.getElementById("clear-btn");
// clearButton.addEventListener("click", () => {
//   clearGrid();
// });
