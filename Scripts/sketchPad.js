
//How do you dynamically change the grid columns and rows based on the user input of the size?

//Add a button which will clear the current grid and send the user a popup asking 
//for how many squares per side to make the new grid. Once entered the new grid should be generated in the same 
//total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.

function sketchPad (padSize) {

    const container = document.querySelector('#sketchFrame');

    for (let i=1; i <=(padSize*padSize); i++) {
        let content = document.createElement('div');
        content.classList.add('squares');
        content.setAttribute('id','square-' + i);
        container.appendChild(content);  
    }

    container.style.gridTemplateColumns = "1fr ".repeat(padSize);
    container.style.gridTemplateRows = "1fr ".repeat(padSize);
    
    const squares = Array.from(document.querySelectorAll('.squares'));
    squares.forEach((square) => {
            square.addEventListener('mouseenter', (e) => {
                document.getElementById(square.id).style.backgroundColor = randomiseColour();
            })
        }
    
    )

}

function randomiseColour () {
    let colours = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'brown', 'gold', 'grey', 'black'];
    return colours[(Math.random()*colours.length)|0];
}

function removeOldPad() {
    const existingPad = document.querySelector('#sketchFrame');
    while (existingPad.firstChild) {
        existingPad.removeChild(existingPad.firstChild);
    }
}

sketchPad(8);

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', (e) => {
    removeOldPad()
    const userPadSize = prompt('Enter a Drawing Pad Size', 8);
    sketchPad(userPadSize);
})


