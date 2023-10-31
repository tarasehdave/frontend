
<head>
    <title>Frontend Example</title>
</head>
<body>
    <h1>Frontend Example</h1>
    <div id="data"></div>

    <script>
        // Function to make the API request
        function fetchData() {
            fetch('http://localhost:8350/api/inventory/fruits')
                .then(response => response.json())
                .then(data => {
                    // Process the data from the backend
                    document.getElementById('data').textContent = JSON.stringify(data, null, 2);
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });
        }

        // Call the fetchData function when the page loads
        fetchData();
    </script>
</body>
</html>

