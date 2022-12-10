const container = document.querySelector(".container");

function createSketchGrid(dimension, containerElement){
    for (let i=0; i < dimension; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        containerElement.appendChild(newRow);
        for (let j = 0; j < dimension; j++) {
            let newCol = document.createElement("div");
            newCol.classList.add("col");
            newCol.addEventListener('mouseover', e => {
                changeColor(e.target)});
            newRow.appendChild(newCol);
        };
}};


function changeColor(element) {
    if (element.style.backgroundColor == ""){
        element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        element.classList.add("brightness100");
    } else {
        currentBrightness = Array.from(element.classList).pop();
        switch (currentBrightness) {
            case "brightness100":
                element.classList.add("brightness90");
                break;
            case "brightness90":
                element.classList.add("brightness80");
                break;
            case "brightness80":
                element.classList.add("brightness70");
                break;
            case "brightness70":
                element.classList.add("brightness60");
                break;
            case "brightness60":
                element.classList.add("brightness50");
                break;   
            case "brightness50":
                element.classList.add("brightness40");
                break;   
            case "brightness40":
                element.classList.add("brightness30");
                break;   
            case "brightness30":
                element.classList.add("brightness20");
                break;   
            case "brightness20":
                element.classList.add("brightness10");
                break;   
            case "brightness10":
                element.classList.add("brightness00");
                break;   
            case "brightness00":
                break;              
        }
    }

};

function promptGridDimension(){
    let dimension = prompt("How many squares per side would you like your grid to be? (max 100)");
    dimension = parseInt(dimension);
    if (dimension <= 100) {
        createSketchGrid(dimension, container);
    }

}
