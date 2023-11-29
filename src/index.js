import { populateGrid, getColour, setColour} from "./create-grid.js";
import "./style.css";

function changeSize(size){
    populateGrid(size);
}

function clearGrid() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "white")
}

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", clearGrid);

const sizeSlider = document.querySelector("#size-slider");
sizeSlider.addEventListener("change", () => changeSize(sizeSlider.value));

const blockButton = document.querySelector("#block-btn");
blockButton.addEventListener("click", () => setColour("black"));

const eraserButton = document.querySelector("#eraser-btn");
eraserButton.addEventListener("click", () => setColour("white"));

populateGrid(16);