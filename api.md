---
layout: default
title: API
---

%%javascript
const apiEndpoint = 'https://yourapihostname.com/api/data'; <!--Updated with your API URL-->
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
