'use strict'
const size = document.querySelector("#myRange");
const penColor = document.querySelector("#penColor");
// size.oninput = () => console.log(size.value);
const gc = document.querySelector(".grid-container");

window.onload = () => {
    console.log(size.value);
    
    gridMaker(size.value, gc);
};

size.addEventListener("change", () => {
    console.log(size.value);
    
    gridMaker(size.value, gc);
});

function gridMaker(size, gc){
    const subGrid = document.createElement("div");
    let height = gc.offsetHeight;
    let h = (height/size) + "px";
    subGrid.style.height= h ;
    subGrid.style.width = h ;
    subGrid.style.backgroundColor = `aliceblue` ;
    // subGrid.style.borderStyle = `solid`;
    // subGrid.style.borderWidth = `thin`;
    // subGrid.style.borderColor = `black`;
    gc.replaceChildren();

    for(let i = 0; i < (size*size); i++){
        gc.appendChild(subGrid.cloneNode(true));
    }
    //gc.appendChild(subGrid);
}
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#rainbow");
const shade = document.querySelector("#shade");
let isMouseDown = 0;
window.onmousedown = () => isMouseDown++;
window.onmouseup = () => isMouseDown--;
gc.addEventListener("mouseover", (e) => {
    if(isMouseDown){
        let targetDiv = e.target;
        console.log(eraser.checked);
        if(eraser.checked){
            targetDiv.style.backgroundColor = `aliceblue`;}
        else if(rainbow.checked){
            targetDiv.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        }
        else if(shade.checked){
            targetDiv.style.backgroundColor = `color-mix(in srgb,${targetDiv.style.backgroundColor},${penColor.value} 10%)`;
        }
        else{
            targetDiv.style.backgroundColor = penColor.value;}
    }
})
gc.addEventListener("click", (e) => {
    
        let targetDiv = e.target;
        
        if(eraser.checked){
            targetDiv.style.backgroundColor = `aliceblue`;}
        else if(rainbow.checked){
            targetDiv.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        }
        else if(shade.checked){
            targetDiv.style.backgroundColor = `color-mix(in srgb,${targetDiv.style.backgroundColor},${penColor.value} 10%)`;
        }
        else{
            targetDiv.style.backgroundColor = penColor.value;}
    
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    
    gridMaker(size.value, gc);
})