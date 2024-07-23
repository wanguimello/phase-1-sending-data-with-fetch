function submitData(name, email) {
    // Define the URL for the POST request
    const url = 'http://localhost:3000/users';
  
    // Define the data to be sent in the POST request
    const userData = {
      name: name,
      email: email
    };
  
    // Make the POST request using fetch
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data and append the new id value to the DOM
        const body = document.querySelector('body');
        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${data.id}`;
        body.appendChild(idElement);
      })
      .catch(error => {
        // Handle the error and append the error message to the DOM
        const body = document.querySelector('body');
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  