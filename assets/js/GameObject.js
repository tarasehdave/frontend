export default class GameObject {
    constructor(canvas, image, gameSpeed, speedRatio) {
        this.canvas = canvas;
        this.image = image;
        this.speed = 2;
        this.x = 0; // Initial x-coordinate
        this.y = 0; // Initial y-coordinate
        this.width = 920; 
        this.height = 360; 
        this.ctx = canvas.getContext('2d'); // Canvas 2D rendering context
    }

    update() {
        // Update the x-coordinate to move the object horizontally
        this.x -= this.speed;

        // If the object is completely off the screen, reset its position
        if (this.x <= -this.width) {
            this.x = 0;
        }
    }

    draw() {
        // Draw the object on the canvas using its image and updated coordinates
        this.ctx.drawImage(this.image, this.x, this.y);
        
        // Draw a second image to create a looping effect
        this.ctx.drawImage(this.image, this.x + this.width, this.y);
    }
}

// Get canvas element
const canvas = document.getElementById('canvas');

// Load background image
const backgroundImg = new Image();
backgroundImg.src = 'path/to/your/background-image.jpg';

backgroundImg.onload = () => {
    // Initialize the background object
    const background = new GameObject(canvas, backgroundImg, 2, 1);

    // Game loop function
    function gameLoop() {
        // Update the game objects
        background.update();

        // Clear the canvas
        background.ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the game objects
        background.draw();

        // Request the next frame
        requestAnimationFrame(gameLoop);
    }

    // Start the game loop
    gameLoop();
};

backgroundImg.onerror = handleImageError;
// ... (loading other images and handling their errors)
