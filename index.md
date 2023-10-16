---
layout: default
title: Grocery Store
---
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<style>
.center-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* This centers vertically in the viewport */
}
.center-image img {
    max-width: 80%;
    max-height: 80%;
}
h1 {
    font-family: "Times New Roman", "Georgia", "Verdana"; 
    text-align: center;
}
header {
    background-color: #f2e9e1;
    color: #fff;
    padding: 10px 0;
}
nav ul {
    list-style: none;
    padding: 0;
    text-align: center;
}
nav ul li {
    display: inline;
    margin-right: 20px;
}
nav ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}
</style>
<header>
    </header>
<body>
    <h1>grocery store</h1>
    <div class="center-image">
        <img src="https://github.com/tarasehdave/frontend/assets/39902320/e911966c-fd54-4b0a-8e81-89d80f4d9b0e" alt="Centered Image">
    </div>
</body>
</html>

%%javascript
import GameObject from './GameObject.js';

export class Background extends GameObject {
    constructor(canvas, image, gameSpeed, speedRatio) {
        super(canvas, image, gameSpeed, speedRatio);
    }
    update() {
        this.x = (this.x - this.speed) % this.width;
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y);
        this.ctx.drawImage(this.image, this.x + this.width, this.y);
    }
}

export function initBackground(canvas, image, gameSpeed, speedRatio) {
    // Build game object
    var background = new Background(canvas, image, gameSpeed, speedRatio);

    // Prepare Window extents related to viewport
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    // Setup background constant to adjust display size
    const ADJUST = 1.42 // visual layer adjust, use "1"" for a perfect loop 

    // Set Dimensions to match the image width
    const canvasWidth = maxWidth;
    const canvasHeight = canvasWidth / background.aspect_ratio;  // height is oriented by width
    const canvasLeft = 0; // Start image from the left edge horizontally
    const canvasTop = (maxHeight - canvasHeight) / 2;  // center image vertically

    // Set dimensions for the background canvas
    canvas.width = background.width / ADJUST;
    canvas.height = background.height / ADJUST;
    // Set Style properties for the background canvas
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    canvas.style.position = 'absolute';
    canvas.style.left = `${canvasLeft}px`;
    canvas.style.top = `${canvasTop}px`;

    return background;
}

export default Background;