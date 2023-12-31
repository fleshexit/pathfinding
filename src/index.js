import { populateGrid, getColour, setColour} from "./create-grid.js";
import "./style.css";

function changeSize(size){
    populateGrid(size);
}

function clearGrid() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "white")
}

// Event Listeners

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", clearGrid);

const blockButton = document.querySelector("#block-btn");
blockButton.addEventListener("click", () => setColour("black"));

const eraserButton = document.querySelector("#eraser-btn");
eraserButton.addEventListener("click", () => setColour("white"));


const endButton = document.querySelector("#end-btn");
endButton.addEventListener("click", () => setColour("red"));

const menu = document.querySelector(".menu");
const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener("click", () => menu.showModal());


const sizeSlider = document.querySelector("#size-slider");
sizeSlider.addEventListener("change", () => changeSize(sizeSlider.value));

populateGrid(16);