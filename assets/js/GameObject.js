export default class GameObject {
    constructor(canvas, image, gameSpeed, speedRatio) {
        this.canvas = canvas;
        this.image = image;
        this.speed = gameSpeed * speedRatio; // Adjust speed based on the speed ratio
        this.x = 0; // Initial x-coordinate
        this.y = 0; // Initial y-coordinate
        this.width = image.width; // Width of the object (assuming the image has a width property)
        this.height = image.height; // Height of the object (assuming the image has a height property)
        this.ctx = canvas.getContext('2d'); // Canvas 2D rendering context
    }

    update() {
        // Update the object's properties here if needed
        // For example, update the x-coordinate to move the object
    }

    draw() {
        // Draw the object on the canvas using its image and coordinates
        this.ctx.drawImage(this.image, this.x, this.y);
    }
}

export default class GameObject {
    constructor(canvas, image, gameSpeed, speedRatio) {
        // ... (constructor code from the provided GameObject class)
    }

    update() {
        // ... (update logic for your game objects, if needed)
    }

    draw() {
        // ... (drawing logic for your game objects)
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
