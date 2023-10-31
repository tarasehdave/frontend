---
layout: default
title: Fruits
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fruits</title>
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
    <div class="text-box">
        <h2>Fruits</h2>
        <p>Shop for our fruits!</p>
    </div>
    <div class="row">
        <div class="row">
        d
        </div>
    </div>
</body>


fetch('http://localhost:8350/api/inventory/fruits')
  .then(response => response.json())
  .then(data => {
    // Process the data from the backend
  })
  .catch(error => {
    // Handle errors
  });

</html>

