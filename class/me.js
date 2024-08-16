// Function to store data in local storage
function storeData() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    // Create an object to store user data
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    // Store the object as a JSON string in local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Fetch and display the stored data
    fetchData();
}

// Function to fetch and display data from local storage
function fetchData() {
    // Retrieve the JSON string from local storage
    const storedData = localStorage.getItem('userData');

    // Parse the JSON string back to an object
    const userData = JSON.parse(storedData);

    // Display the data on the page
    const storedDataDiv = document.getElementById('storedData');
    storedDataDiv.innerHTML = `
        <p><strong>First Name:</strong> ${userData.firstName}</p>
        <p><strong>Last Name:</strong> ${userData.lastName}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
    `;
}

// Fetch and display data when the page loads
window.onload = fetchData;
