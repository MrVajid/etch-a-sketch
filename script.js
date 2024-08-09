'use strict'
const canvas = document.querySelector(".canvas");
const canvasDivisions = document.querySelector("#myRange");
const penColor = document.querySelector("#penColor");
const normal = document.querySelector("#normal");
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#rainbow");
const shade = document.querySelector("#shade");
const clear = document.querySelector("#clear");

const canvasElement = document.createElement("div");

let isMouseDown = 0;
window.onmousedown = () => isMouseDown++;
window.onmouseup = () => isMouseDown--;

function canvasDivider(canvasDivisions, canvas){
    let canvasSide = canvas.offsetHeight;
    let canvasElementSide = (canvasSide/canvasDivisions) + "px";
    canvasElement.style.height= canvasElementSide ;
    canvasElement.style.width = canvasElementSide ;
    canvasElement.style.backgroundColor = `#FAF9F6` ;
    
    canvas.replaceChildren();
    for(let i = 0; i < (canvasDivisions ** 2); i++){
        canvas.appendChild(canvasElement.cloneNode(true));
    }
}

window.onload = () => {
    canvasDivider(canvasDivisions.value, canvas);
};

canvasDivisions.addEventListener("change", () => { 
    canvasDivider(canvasDivisions.value, canvas);
});

function canvasElementUpdater(canvasElement) {
    if(eraser.checked){
        canvasElement.style.backgroundColor = `#FAF9F6`;}
    else if(rainbow.checked){
        canvasElement.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},
                                                   ${Math.floor(Math.random()*256)},
                                                   ${Math.floor(Math.random()*256)})`;
    }
    else if(shade.checked){
        canvasElement.style.backgroundColor = `color-mix(in srgb,${canvasElement.style.backgroundColor},
                                                                 ${penColor.value} 20%)`;
    }
    else if(normal.checked){
        canvasElement.style.backgroundColor = penColor.value;
    }
}

canvas.addEventListener("mouseover", (e) => {
    if(isMouseDown){
        let targetElement = e.target;
        canvasElementUpdater(targetElement);
    }
})

canvas.addEventListener("click", (e) => {
        let targetElement = e.target;
        canvasElementUpdater(targetElement);
})

clear.addEventListener("click", () => canvasDivider(canvasDivisions.value, canvas));

