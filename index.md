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
        //position and dimensions of background
        .background {
            width: 200vw;
            height: 100vh;
            background: url('https://user-images.githubusercontent.com/115954616/275579364-e2731695-21fc-4dff-b4d1-d0ac01d9d549.jpeg') repeat-x;
            position: absolute;
            top: 0;
            left: 0;
            animation: scrollBackground 5s linear infinite;
        }
        //keyframes scrolling background
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
        <h2>FreshCart!</h2>
        <p>Where quality meets freshness</p>
        <p>At FreshCart, we take pride in offering a wide array of fresh and organic products that not only nourish your body but also contribute to a healthier planet. We believe that what you eat matters, and that's why we go the extra mile to provide you with the best.</p>
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
            <a href="veg.html">
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
