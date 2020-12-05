const quotes = [{
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    name: "Thomas Edison"
}, {
    quote: "You can observe a lot just by watching.",
    name: "Yogi Berra"
}, {
    quote: "A house divided against itself cannot stand.",
    name: "Abraham Lincoln"
}, {
    quote: "Difficulties increase the nearer we get to the goal.",
    name: "Johann Wolfgang von Goethe"
}, {
    quote: "Fate is in your hands and no one elses",
    name: "Byron Pulsifer"
}];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', getQuote);

function getQuote() {
    let position = Math.floor(Math.random() * quotes.length);

    quoteAuthor.innerHTML = quotes[position].name;
    quote.innerHTML = quotes[position].quote;
}