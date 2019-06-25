/*
Create X amount of divs using a loop, based on an inputted number
Add those Div's to the existing Div in the html. This can be done in above loop.
Add an element to each div. This can probably also be in the above loop.

How do you dynamically change the grid columns and rows based on the user input of the size?

Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
Hint: “hovering” is what happens when your mouse enters a div and ends when your mouse leaves it.. you can set up event listeners for either of those events as a starting point.
*/

const padSize = 16;
const container = document.querySelector('#sketchFrame');

for (let i=1; i <=padSize; i++) {
    let content = document.createElement('div');
    content.classList.add('squares');
    content.setAttribute('id','square-' + i);
    container.appendChild(content);  
}

function randomiseColour () {
    let colours = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];
    return colours[(Math.random()*colours.length)|0];
}

const squares = Array.from(document.querySelectorAll('.squares'));
squares.forEach((square) => {
            square.addEventListener('mouseenter', (e) => {
                document.getElementById(square.id).style.backgroundColor = randomiseColour();
            })
        }
    
    )

