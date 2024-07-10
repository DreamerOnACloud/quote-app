const quotes = [
    {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs"
    },
    {
        text: "Good design is good business.",
        author: "Thomas Watson Jr."
    },
    {
        text: "The details are not the details. They make the design.",
        author: "Charles Eames"
    },
    {
        text: "People ignore design that ignores people.",
        author: "Frank Chimero"
    },
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci"
    },
    {
        text: "Design is thinking made visual.",
        author: "Saul Bass"
    },
    {
        text: "Good design is obvious. Great design is transparent.",
        author: "Joe Sparano"
    },
    {
        text: "The best ideas come as jokes. Make your thinking as funny as possible.",
        author: "David Ogilvy"
    }
];

document.getElementById('fetch-quote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').innerText = `${quote.text} - ${quote.author}`;
});



// /* This api provides generic quotes, cannot filter by UX/UI */
// document.getElementById('fetch-quote').addEventListener('click', () => {
//     fetch('https://type.fit/api/quotes')
//         .then(response => response.json())
//         .then(data => {
//             const randomIndex = Math.floor(Math.random() * data.length);
//             document.getElementById('quote').innerText = data[randomIndex].text + ' - ' + data[randomIndex].author;
//         })
//         .catch(error => {
//             document.getElementById('quote').innerText = 'An error occurred. Please try again.';
//             console.error('Error fetching quote:', error);
//         });
// });
