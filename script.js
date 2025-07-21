const quoteImg = document.getElementById("quoteImg");
const quoteCounter = document.getElementById("quoteCounter");
let counter = 0;

const quotes = {
  "Reflective": "images/PHOTO-2025-07-17-09-20-26-2.jpg",
  "Self-worth": "images/PHOTO-2025-06-21-16-33-18.jpg",
  "Wisdom": "images/PHOTO-2025-06-27-00-16-15.jpg",
  "Growth": "images/PHOTO-2025-07-03-09-09-21.jpeg",
  "Self-awareness": "images/PHOTO-2025-07-04-12-44-00.jpg",
  "Spiritual Awareness": "images/PHOTO-2025-07-08-09-56-57.jpg",
  "Trauma": "images/PHOTO-2025-07-17-09-20-26.jpg"
};

function showQuote() {
  const emotion = document.getElementById("emotionSelect").value;
  if (quotes[emotion]) {
    quoteImg.src = quotes[emotion];
    quoteImg.classList.add("show");
    counter++;
    quoteCounter.innerText = `Quotes viewed: ${counter}`;
  } else {
    quoteImg.classList.remove("show");
  }
}

function showRandomQuote() {
  const keys = Object.keys(quotes);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  document.getElementById("emotionSelect").value = randomKey;
  showQuote();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
