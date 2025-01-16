//JS
const container = document.querySelector('.bubbles-container');

function CreateBubbles() {
    const Bubbles = document.createElement('div');
    Bubbles.classList.add('bubbles');

    //Set Random Position of Bubbles
    const xPosition = Math.random() * 100; // Random X position
    const yPosition = Math.random() * 100; // Random Y position
    Bubbles.style.left = `${xPosition}vh`;
    Bubbles.style.top = `${yPosition}vh`;

    //Set dimensions of Bubbles
    Bubbles.style.height = `80%`;
    Bubbles.style.width = `80%`;

    //Set Random color of Bubbles
    //(value between 200 and 255 for Red and Blue)
    //(green value set to 140 fixed)
    Bubbles.style.background = `radial-gradient(circle, 
    rgba(${Math.random() * 55 + 150}, 140,${Math.random() * 55 + 150},5 ) 15.5%,
    rgba(${Math.random() * 55 + 150}, 140,${Math.random() * 55 + 150},0 ) 40%) no-repeat`;
    //Adding bubble to list to keep track of it.

    //Adding to container
    const Duration = Math.random()*3+5;
    Bubbles.style.animationDuration = `${Duration}s`;
    
    moveBubbles(Bubbles);
    Bubbles.addEventListener('animationiteration', () => {
        moveBubbles(Bubbles);
    });
    container.appendChild(Bubbles);
}

function moveBubbles(Bubbles) {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const bubbleWidth = Bubbles.offsetWidth;
        const bubbleHeight = Bubbles.offsetHeight;

        // Calculate random position within the bounds of the container
        const maxX = containerWidth - bubbleWidth;
        const maxY = containerHeight - bubbleHeight;

        // Random X and Y position, making sure the bubble stays inside the container
        const randomX = (Math.random() * (2 * maxX)) - maxX;
        const randomY = (Math.random() * (2 * maxY)) - maxY;

        //Set old location to 0%
        const currentX = parseFloat(getComputedStyle(Bubbles).getPropertyValue('--PosX')) || 0;
        const currentY = parseFloat(getComputedStyle(Bubbles).getPropertyValue('--PosY')) || 0;

        Bubbles.style.setProperty('--PrevX', `${currentX}px`);
        Bubbles.style.setProperty('--PrevY', `${currentY}px`);
        
        // Update the bubble's position using CSS variables
        Bubbles.style.setProperty('--PosX', `${randomX}px`);
        Bubbles.style.setProperty('--PosY', `${randomY}px`);
}




for (let i = 0; i < 5; i++) {
    CreateBubbles();
}