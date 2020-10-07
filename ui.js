export class UI {
  static INITIAL_GRID_SIDE_LENGTH = 16;
  static GRID_SIZE = 550;

  constructor() {
    this.grid = document.getElementById("grid");
    this.createGrid(UI.INITIAL_GRID_SIDE_LENGTH, UI.GRID_SIZE);
    this.clearButton = document.getElementById("clear-btn");
    this.makeClearButton();
  }

  createGrid(initialGridSideLength, initialGridSize) {
    this.createGridCSSText(initialGridSideLength, initialGridSize);
    this.createGridElements(initialGridSideLength);
  }

  createGridCSSText(initialGridSideLength, initialGridSize) {
    const calculateCellSize = function (gridSideLength, gridSize) {
      return Math.round(gridSize / gridSideLength);
    };
    const cellSize = calculateCellSize(initialGridSideLength, initialGridSize);
    const gridSize = initialGridSideLength * cellSize;
    const cssText = `height: ${gridSize}px;
                  width: ${gridSize}px;
                  grid-template-columns: repeat(${initialGridSideLength}, ${cellSize}px);
                  grid-template-rows: repeat(${initialGridSideLength}, ${cellSize}px);`;
    this.grid.style.cssText = cssText;
  }

  createGridElements(gridSideLength) {
    const gridFragment = document.createDocumentFragment();
    for (let row = 0; row < gridSideLength; row++) {
      for (let column = 0; column < gridSideLength; column++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "grid-cell");
        cell.setAttribute("data-row", row);
        cell.setAttribute("data-column", column);
        cell.style.gridRow = `${row + 1} / span 1`;
        cell.style.gridColumn = `${column + 1} / span 1`;
        cell.addEventListener("mouseenter", (event) => {
          event.target.classList.add("grid-cell--marked");
        });
        gridFragment.appendChild(cell);
      }
    }
    this.grid.appendChild(gridFragment);
  }

  clearGrid() {
    const { grid } = this;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }

  makeClearButton() {
    const isUserInputIllegal = function (userSize) {
      const MAX_USER_SIZE = 100;
      return (
        !userSize ||
        !Number.isInteger(userSize) ||
        userSize > MAX_USER_SIZE ||
        userSize < 1
      );
    };
    this.clearButton.addEventListener("click", () => {
      this.clearGrid();
      let userSize = prompt(
        "How many squares per side to make the new grid (maximum: 100)?"
      );
      if (userSize === null) return;
      userSize = Number.parseInt(userSize);
      if (isUserInputIllegal(userSize)) {
        alert("Input was not a number between 1 and 100, aborting.");
        return;
      }
      this.createGrid(userSize, UI.GRID_SIZE);
    });
  }
}
