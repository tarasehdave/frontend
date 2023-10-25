---
layout: default
title: Grocery Store
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocery Store</title>
    <style>
        header {
    background-color: #f2e9e1;
    color: #fff;
    padding: 10px 0;
        }
        nav ul {
            list-style: none;
            padding: 30px;
            text-align: right;
        }
        nav ul li {
            display: inline;
            margin-right: 20px;
        }
        nav ul li a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
            font-family:
        }
        body {
            font-family: "Verdana";
        }
        .center-image {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .center-image img {
            max-width: 80%;
            max-height: 80%;
        }
        h1 {
            text-align: center;
        }
        header {
            background-color: #f2e9e1;
            color: #fff;
            padding: 10px 0;
        }
        .row {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        .group {
            text-align: center;
            max-width: 30%;
            max-height: 30%;
        }
        .home-link {
            color: #ab9784;
        }
        .text-box {
            position: absolute;
            background-color: rgba(171,151,132,0.8);
            color: #f2e9e1;
            padding: 20px;
            text-align: center;
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, 50%); 
        }
        .background {
            width: 200vw;
            height: 100vh;
            background: url('https://user-images.githubusercontent.com/115954616/275579364-e2731695-21fc-4dff-b4d1-d0ac01d9d549.jpeg') repeat-x;
            position: absolute;
            top: 0;
            left: 0;
            animation: scrollBackground 5s linear infinite;
        }
        @keyframes scrollBackground {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(-100%);
            }
        }
    </style>
</head>
<body>
    <header>
    </header>
    <div class="center-image">
        <img src="https://github.com/tarasehdave/frontend/assets/39902320/e911966c-fd54-4b0a-8e81-89d80f4d9b0e" alt="Centered Image">
    </div>
    <div class="text-box">
        <h2>Grocery Store!</h2>
        <p>We believe in Fresh and Organic. add more about blah blah blah</p>
    </div>
    <div class="row">
    <div class="row">
        <div class="group">
            <a href="fruits.md">
                <img src="https://github.com/tarasehdave/frontend/assets/39902320/d5f2df5a-833d-4357-bf75-f82fbba3b424" alt="Fruits Image">
                <h2 class="home-link">fruits</h2>
            </a>
        </div>
        <div class="group">
            <a href="vegetables.md">
                <img src="https://github.com/tarasehdave/frontend/assets/39902320/6a847f79-2411-4ca6-b828-eee3be8aaceb">
                <h2 class="home-link">vegetables</h2>
            </a>
        </div>
        <div class="group">
            <a href="bread.md">
                <img src="https://github.com/tarasehdave/frontend/assets/39902320/8023b996-7101-4eab-8ad9-5677be088b65" alt="bread Image">
                <h2 class="home-link">bread</h2>
            </a>
        </div>
    </div>
</body>
</html>

<script type="module">

import GameObject from '{{site.baseurl}}/assets/js/GameObject.js';

class Background extends GameObject {
    constructor(canvas, image, gameSpeed, speedRatio, initialXPosition, initialSpeed, initialWidth) {
        super(canvas, image, gameSpeed, speedRatio);
        this.x = initialXPosition; // Set the initial horizontal position of the background
        this.speed = initialSpeed; // Set the initial speed of the background
        this.width = initialWidth || image.width; // Set the initial width of the background
    }

    update() {
        this.x = (this.x - this.speed) % this.width;
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y);
        this.ctx.drawImage(this.image, this.x + this.width, this.y);
    }
}

function initBackground(canvas, image, gameSpeed, speedRatio, initialXPosition, initialSpeed, initialWidth) {
    // Build game object
    var background = new Background(canvas, image, gameSpeed, speedRatio, initialXPosition, initialSpeed, initialWidth);

    // Prepare Window extents related to viewport
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    // Setup background constant to adjust display size
    const ADJUST = 1.42; // visual layer adjust, use "1" for a perfect loop

    // Set Dimensions to match the image width
    const canvasWidth = maxWidth;
    const canvasHeight = canvasWidth / background.aspect_ratio; // height is oriented by width
    const canvasLeft = 0; // Start image from the left edge horizontally
    const canvasTop = (maxHeight - canvasHeight) / 2; // center image vertically

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

// Get canvas element
const canvas = document.getElementById('canvas');

// Actual Image URLS
const backgroundImageUrl = 'https://user-images.githubusercontent.com/115954616/275579364-e2731695-21fc-4dff-b4d1-d0ac01d9d549.jpeg';
const fruitsImageUrl = 'https://user-images.githubusercontent.com/39902320/275380399-d5f2df5a-833d-4357-bf75-f82fbba3b424.png';
const vegetablesImageUrl = 'https://user-images.githubusercontent.com/39902320/275383718-6a847f79-2411-4ca6-b828-eee3be8aaceb.png';
const breadImageUrl = 'https://user-images.githubusercontent.com/39902320/275383787-8023b996-7101-4eab-8ad9-5677be088b65.png';

const backgroundImg = new Image();
backgroundImg.src = backgroundImageUrl;
backgroundImg.onload = () => {
    // Image loaded successfully
    const fruitsImg = new Image();
    fruitsImg.src = fruitsImageUrl;
    fruitsImg.onload = () => {
        // Fruits image loaded successfully
        const vegetablesImg = new Image();
        vegetablesImg.src = vegetablesImageUrl;
        vegetablesImg.onload = () => {
            // Vegetables image loaded successfully
            const breadImg = new Image();
            breadImg.src = breadImageUrl;
            breadImg.onload = () => {
                // Bread image loaded successfully
                const background = initBackground(canvas, backgroundImg, 2, 1, 0, 2, backgroundImg.width);
            }
        }
    }
}
</script>
