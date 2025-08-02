//JS for index.html

const quotes = [
    {
        text: `“Sharnap made our family trip absolutely stress-free. Every detail was planned with care — from airport pickup to cozy stays. We just enjoyed the journey!”`,
        name: "— Lyra Veilstone"
    },
    {
        text: `“This was my first solo trip, and I was nervous. But Sharnap’s support and planning made me feel confident every step of the way. Can’t wait to book again!”`,
        name: "— Kian Voss"
    },
    {
        text: `“It felt like Sharnap knew exactly what we needed. The itinerary was balanced, unique, and full of hidden gems. Not just a vacation — an experience!”`,
        name: "— Rhea Calder & Orion Trace"
    },
    {
        text: `“Booking with Sharnap was the best decision. Smooth, budget-friendly, and way more personal than any other agency I've tried.”`,
        name: "— Ezren Dale"
    },
    {
        text: `“Sharnap gave us memories we’ll never forget. From the local experiences to the comfort of travel, everything was on point.”`,
        name: "— Nova Thorne"
    }
];

let index = 0;
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

setInterval(() => {
    // Fade out
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % quotes.length;
        quoteText.textContent = quotes[index].text;
        quoteAuthor.textContent = quotes[index].name;

        // Fade in
        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 500); // matches transition duration
}, 5000); // every 5 seconds
