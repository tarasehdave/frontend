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
            <img src="https://github.com/tarasehdave/frontend/assets/39902320/d5f2df5a-833d-4357-bf75-f82fbba3b424" alt="Fruits Image">
            <h2 class="home-link">fruits</h2>
        </div>
        <div class="group">
            <img src="https://github.com/tarasehdave/frontend/assets/39902320/6a847f79-2411-4ca6-b828-eee3be8aaceb" alt="Vegetables Image">
            <h2 class="home-link">vegetables</h2>
        </div>
        <div class="group">
            <img src="https://github.com/tarasehdave/frontend/assets/39902320/8023b996-7101-4eab-8ad9-5677be088b65" alt="Bread Image">
            <h2 class="home-link">bread</h2>
        </div>
    </div>

<head>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
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
