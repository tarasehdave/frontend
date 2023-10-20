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

// Game loop code
const background = new GameObject(canvas, backgroundImg, 2, 1);

function gameLoop() {
    // ... (game loop logic from the provided gameLoop function)
}

backgroundImg.onload = () => {
    // ... (image load logic from your existing code)
    gameLoop();
};

backgroundImg.onerror = handleImageError;
// ... (loading other images and handling their errors)
