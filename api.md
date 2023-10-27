---
layout: default
title: API
---

%%javascript
const apiEndpoint = 'https://yourapihostname.com/api/data'; # Updated with your API URL

<!--
const loginData = {
    username: 'your_username',
    password: 'your_password'
};
fetch('http://localhost:8350/api/jokes/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
})
.then(response => response.json())
.then(data => {
    console.log(data);
    // Handle the response data in your frontend
})
.catch(error => {
    console.error('Error:', error);
});
-->
const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from your GitHub Pages domain
app.use(cors({
  origin: 'https://yourgithubusername.github.io',
}));

// ... your other middleware and routes ...

// Start your server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
