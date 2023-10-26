---
layout: default
title: Grocery List
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocery List</title>
<!-- Grocery Store Title -->
<h1 id="storeTitle">My Grocery List</h1>

<!-- Grocery List -->
<ul id="groceryList">

</ul>

<!-- Add Item Form -->
<div>
    <input type="text" id="itemInput" placeholder="Enter an item">
    <button id="addItemButton">Add Item</button>
    <button id="clearListButton">Clear List</button>
</div>

<!-- JavaScript Code -->
<script>
    // Function to add an item to the grocery list
    function addItemToList() {
        var itemInput = document.getElementById("itemInput");
        var groceryList = document.getElementById("groceryList");

        if (itemInput.value.trim() !== "") {
            var newItem = document.createElement("li");
            newItem.innerText = itemInput.value;
            groceryList.appendChild(newItem);

            // Clear the input field
            itemInput.value = "";

            // Update the store title
            var storeTitle = document.getElementById("storeTitle");
            storeTitle.innerText = "My Grocery List"; // You can change this text as needed
        }
    }

    // Function to clear the grocery list
    function clearList() {
        var groceryList = document.getElementById("groceryList");
        groceryList.innerHTML = ""; // This clears all the list items
    }

    // Add an item when the button is clicked
    var addItemButton = document.getElementById("addItemButton");
    addItemButton.onclick = addItemToList;

    // Clear the list when the "Clear List" button is clicked
    var clearListButton = document.getElementById("clearListButton");
    clearListButton.onclick = clearList;
</script>

</head>
<body>
    
</body>
</html>