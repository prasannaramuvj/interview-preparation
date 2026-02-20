// Returns a promise
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Also returns a promise!
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Fetch error:', error);
    });