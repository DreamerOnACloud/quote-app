document.getElementById('fetch-quote').addEventListener('click', () => {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            document.getElementById('quote').innerText = data[randomIndex].text + ' - ' + data[randomIndex].author;
        })
        .catch(error => {
            document.getElementById('quote').innerText = 'An error occurred. Please try again.';
            console.error('Error fetching quote:', error);
        });
});
